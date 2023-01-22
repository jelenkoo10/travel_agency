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
        return view('offers.show', compact('offer', 'id'));
    }

    public function create() {
        return view('offers.create');
    }

    public function edit($id) {
        $offer = Offer::whereId($id)->get();
        return view('offers.update', compact('offer'));
    }

    public function update(Offer $offer) {

        $data = request()->validate([
            'city' => 'required',
            'country' => 'required',
            'continent' => 'required',
            // 'image' => '',
        ]);

        // if (request('image')) {
        //     $image_path = request('image')->store('profile', 'public');

        //     $image = Image::make(public_path("storage/{$image_path}"))->fit(1000, 1000);

        //     $image->save();
 
        //     $image_array = ['image' => $image_path];
        // } 

        // auth()->user()->profile->update(array_merge(
        //     $data,
        //     $image_array ?? []
        // ));

        
        return redirect("/profile/{$user->id}");
    }
}
