@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        @auth
            <a href="http://127.0.0.1:8000/offer/create">Add new offer</a>
        @endauth

        <form action='/search' enctype="multipart/form-data" method="post">
            @csrf
            <div>
                <div>
                    <label for="offer_name">Offer name:</label>
                    <input
                        type="text"
                        name="offer_name"
                        value="{{old('offer_name')}}"
                    />
                </div>
                <div>
                    <label for="city">City:</label>
                    <input
                        type="text"
                        name="city"
                        value="{{old('city')}}"
                    />
                </div>
                <div>
                    <label for="continent">Continent:</label>
                    <select name="continent" id="continent">
                        <option value="" selected>Choose continent</option>
                        <option value="Europe">Europe</option>
                        <option value="Asia">Asia</option>
                        <option value="Africa">Africa</option>
                        <option value="North America">North America</option>
                        <option value="South America">South America</option>
                        <option value="Australia and Oceania">Australia and Oceania</option>
                    </select>
                </div>
                <div>
                    <label for="country">Country:</label>
                    <input
                        type="text"
                        name="country"
                        value="{{old('country')}}"
                    />
                </div>
                <div>
                    <label for="transport">Transport:</label>
                    <select name=transport id="transport">
                        <option value="" selected>Choose transport</option>
                        <option value="bus">Bus</option>
                        <option value="plane">Plane</option>
                        <option value="cruise">Cruise</option>
                        <option value="train">Train</option>
                        <option value="own transport">Own transport</option>
                    </select>
                </div>
                <div>
                    <label for="departure_time">Departure time:</label>
                    <input
                        type="date"
                        name="departure_time"
                        value="{{old('departure_time')}}"
                    />
                </div>
                <div>
                    <label for="arrival_time">Arrival time:</label>
                    <input
                        type="date"
                        name="arrival_time"
                        value="{{old('arrival_time')}}"
                    />
                </div>
            </div>
            <div>
                <div class="col-6">
                    <button class="submit-btn">Search</button>
                </div>
            </div>
        </form>

        <div class="mt-6 p-4">
            {{$offers->links('pagination::bootstrap-4')}}
        </div>
        
        <div class="col-md-8">
            @unless ($offers->isEmpty())
                @foreach ($offers as $offer)
                    <div class="card">
                        <a href="http://127.0.0.1:8000/offer/{{ $offer->id }}">{{$offer->offer_name}}</a>
                        <p>{{$offer->city}}, {{$offer->country}} - {{substr($offer->num_of_days, 1)}}</p>
                        <p>Departure: {{$offer->departure_time}}</p>
                        <p>Price: {{$offer->price}}€</p>
                        <p>Transport: {{$offer->transport}}</p>
                        @auth
                            <a href="http://127.0.0.1:8000/offer/{{$offer->id}}/update">Update offer</a>
                        @endauth
                    </div>
                @endforeach
            @endunless
            <div class="mt-6 p-4">
                {{$offers->links('pagination::bootstrap-4')}}
            </div>
        </div>
    </div>
</div>
@endsection
