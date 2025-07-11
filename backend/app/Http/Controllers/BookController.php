<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Book;

class BookController extends Controller
{
    public function index()
    {
        $books = Book::all();
        return response()->json($books);
    }

    public function store(Request $request)
    {
        $book = new Book;
        $book->name = $request->name;
        $book->price = $request->price;
        $book->save();
        return response()->json($book);
    }

    public function show($id)
    {
        $book = Book::find($id);
        return response()->json($book);
    }

    public function update(Request $request, $id)
    {
        $book = Book::find($id);
        $book->name = $request->name;
        $book->price = $request->price;
        $book->save();
        return response()->json($book);
    }

    public function destroy($id)
    {
        $book = Book::find($id);
        $book->delete();
        return response()->json("Se elimino el libro con exito");
    }
}