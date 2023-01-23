<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;
use App\Models\Offer;
use DateTime;

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

    public function store() {
        $formValues = request()->validate([
            'continent' => 'required',
            'country' => 'required',
            'city' => 'required',
            'departure_time' => 'required',
            'arrival_time' => 'required',
            'transport' => 'required',
            'apartment' => 'required',
            'apartment_name' => 'required',
            'accomodation' => 'required',
            'stars' => 'required',
            'price' => 'required',
            'has_internet' => 'required',
            'has_tv' => 'required',
            'has_ac' => 'required',
            'has_fridge' => 'required',
            'destination_image' => ['required', 'image'],
        ]);
        $departure_time = strtotime($formValues['departure_time']);
        $monthName = date('F', $departure_time);
        $year = date('Y', $departure_time);

        $offer_name = $formValues['city'] . ", " . $monthName . " " . $year;
        $formValues['offer_name'] = $offer_name;
        $formValues['num_of_days'] = '';

        $image_path = request('destination_image')->store('uploads', 'public');
        $image = Image::make(public_path("storage/{$image_path}"))->fit(1200, 1200);
        $image->save();
        $formValues['destination_image'] = $image_path;

        Offer::create($formValues);

        return redirect("/home");
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
        Offer::whereId($offer->id)->update($data);
        
        return redirect("/offer/{$offer->id}");
    }
}
