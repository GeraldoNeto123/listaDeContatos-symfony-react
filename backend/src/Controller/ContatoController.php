<?php

namespace App\Controller;

use App\Entity\Contato;
use App\Repository\ContatoRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
     * @Route("/contato", name="contato_")
     */

class ContatoController extends AbstractController
{
    /**
     * @Route("/", name="index", methods={"GET"})
     */
    public function index(ContatoRepository $contatoRepository)
    {
        return $this->json([
            'contatos' => $contatoRepository->findAll(),
        ]);
    }

     /**
     * @Route("/", name="create", methods={"POST"})
     */
    public function create(Request $request)
    {
       $data= $request->request->all();

       $contato = new Contato();
       $contato->setName($data['name']);
       $contato->setTelefone($data['telefone']);
       $contato->setSlug($data['slug']);
       $contato->setCreatedAt(new \DateTime('now', new \DateTimezone('America/Sao_Paulo')));
       $contato->setUpdatedAt(new \DateTime('now', new \DateTimezone('America/Sao_Paulo')));

       $entityManager = $this->getDoctrine()->getManager();
       $entityManager->persist($contato);
       $entityManager->flush();

       return $this->json([
           'contato' => 'Contato Criado com sucesso'
       ]);
    }

    /**
     * @Route("/{id}", name="show", methods={"GET"})
     */
    public function show($id)
    {
        $contato= $this->getDoctrine()->getRepository(Contato::class)->find($id);
        return $this->json([
            'contatos' => $contato
        ]);
    }

    /**
     * @Route("/{id}", name="update", methods={"PUT", "PATCH"})
     */
    public function update(Request $request, $id)
    {
        $data= $request->request->all();

        $contato= $this->getDoctrine()->getRepository(Contato::class)->find($id);

        if($request->request->has('name'))
            $contato->setName($data['name']);
        if($request->request->has('telefone'))
            $contato->setTelefone($data['telefone']);
        if($request->request->has('slug'))
            $contato->setSlug($data['slug']);
        $contato->setUpdatedAt(new \DateTime('now', new \DateTimezone('America/Sao_Paulo')));

        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->flush();

       return $this->json([
           'contato' => 'Contato Atualizado com sucesso'
       ]);
    }

    /**
     * @Route("/{id}", name="delete", methods={"DELETE"})
     */
    public function delete($id)
    {
        $contato= $this->getDoctrine()->getRepository(Contato::class)->find($id);
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->remove($contato);
        $entityManager->flush();

        return $this->json([
            'contato' => 'Contato Removido com sucesso'
        ]);
    }
}
