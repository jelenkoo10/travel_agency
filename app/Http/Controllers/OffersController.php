<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;
use App\Models\Offer;
use Carbon\Carbon;

class OffersController extends Controller
{
    public function index()
    {
        try {
            $offers = Offer::latest()->get();
            return response()->json($offers);
        }
        catch(Exception $e) {
            Log::error($e);
        }
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
            'destination_image' => 'required',
            'available' => 'required',
        ]); 
        $departure_time = strtotime($formValues['departure_time']);
        $arrival_time = strtotime($formValues['arrival_time']);
        $monthName = date('F', $departure_time);
        $year = date('Y', $departure_time);

        $offer_name = $formValues['city'] . ", " . $monthName . " " . $year;
        $formValues['offer_name'] = $offer_name;
        $formValues['available'] = '1';
        $formValues['num_of_days'] = "+" . abs(round(($arrival_time - $departure_time)/ 86400)) . " days";
        $formValues['destination_image'] = "storage/cityPhotos/" . strtolower($formValues['city']) . ".jpg";

        Offer::create($formValues);

        return "VOBRA";
    }

    public function update($id) {

        $data = request()->validate([
            'offer_name' => 'required',
            'city' => 'required',
            'country' => 'required',
            'continent' => 'required',
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
            'destination_image' => 'required'
        ]);

        $departure_time = strtotime($data['departure_time']);
        $arrival_time = strtotime($data['arrival_time']);
        $monthName = date('F', $departure_time);
        $year = date('Y', $departure_time);

        $offer_name = $data['city'] . ", " . $monthName . " " . $year;
        $data['offer_name'] = $offer_name;
        $data['num_of_days'] = "+" . abs(round(($arrival_time - $departure_time)/ 86400)) . " days";
        $data['destination_image'] = "storage/cityPhotos/" . strtolower($data['city']) . ".jpg";

        Offer::whereId($id)->update($data);
        
        return "BRAVO";
    }

    public function destroy($id) {
        Offer::whereId($id)->delete();
        return "Successfully deleted offer";
    }

    public function search(Request $request){
   
        $offers = Offer::where(function ($query) use ($request) {
            if($request->offer_name){
                $query->where('offer_name', 'like', '%' . $request->offer_name . '%');
            }
        })->where(function ($query) use ($request) {
            if($request->city){
                $query->where('city', 'like', '%' . $request->city . '%');
            }
        })->where(function ($query) use ($request) {
            if($request->continent){
                $query->where('continent', 'like', '%' . $request->continent . '%');
            }
        })->where(function ($query) use ($request) {
            if($request->country){
                $query->where('country', 'like', '%' . $request->country . '%');
            }
        })->where(function ($query) use ($request) {
            if($request->transport){
                $query->where('transport', 'like', '%' . $request->transport . '%');
            }
        })->where(function ($query) use ($request) {
            if($request->departure_time){
                $query->whereDate('departure_time', '>=', Carbon::parse($request->departure_time));
            }
        })->where(function ($query) use ($request) {
            if($request->arrival_time){
                $query->whereDate('arrival_time', '<=', Carbon::parse($request->arrival_time));
            }
        })->paginate(60000);

        return response()->json($offers);
    }
}