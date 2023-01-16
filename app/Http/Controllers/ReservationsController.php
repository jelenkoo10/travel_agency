<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Reservation;

class ReservationsController extends Controller
{
    public function create() {
        return view('reservations.create');
    }

    public function store(Request $request)
    {
        $formValues = $request->validate([
            'traveler_name' => 'required',
            'traveler_surname' => 'required',
            'phone_number' => 'required',
            'email' => 'required',
            'payment' => 'required',
            'num_of_travelers' => 'required',
            'comment' => 'required',
        ]);
        $formValues['offer_id'] = $offer_id;
        Reservation::create($formValues);

        return redirect("/offer/{{ offer_id }}");//->with('message', 'Listing created successfully!');
    }
}
