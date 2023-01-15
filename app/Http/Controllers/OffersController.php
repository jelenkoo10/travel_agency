<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Offer;

class OffersController extends Controller
{
    public function index()
    {
        $offers = Offer::latest()->paginate(50);
     
        return view('offers.index', ['offers'=> $offers]);
    }

    public function show($id) {

        $offer = Offer::whereId($id)->get();
        return view('offers.show', compact('offer'));
    }

    public function create() {
        return view('offers.create');
    }
}
