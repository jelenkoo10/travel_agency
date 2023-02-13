<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Reservation;

class ReservationsController extends Controller
{
    public function index() {
        $reservations = Reservation::all();
        return response()->json($reservations);
    }

    public function store(Request $request)
    {
        $formValues = $request->validate([
            'offer_id' => 'required',
            'traveler_name' => 'required',
            'traveler_surname' => 'required',
            'phone_number' => 'required',
            'email' => 'required',
            'payment' => 'required',
            'num_of_travelers' => 'required',
            'comment' => 'required',
        ]);
        $formValues['status'] = '0';
        Reservation::create($formValues);

        return redirect("/home");
    }

    public function update($id) {
        $reservation = Reservation::find($id);

        if($reservation) {
            $reservation->status = '1';
            $reservation->save();
        }

        return "jedva sam uspeo ali sam ga sklepao";
    }
}
