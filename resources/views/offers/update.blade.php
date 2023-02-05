@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <form action="http://127.0.0.1:8000/update/offer/{{ $offer[0]->id }}" enctype="multipart/form-data" method="post">
            <!-- @csrf
            @method('PATCH') -->
            @csrf
            @method('PATCH')
            <div class="row">
                <div class="col-8 offset-2">
                    <div class="row">
                        <h1>Enter new data about this offer</h1>
                    </div>
                    <div class="row mb-3">
                        <label for="city" class="col-md-4 col-form-label">Grad</label>

                        <input id="city" type="text" class="form-control @error('city') is-invalid @enderror" name="city" value="{{ old('city') ?? $offer[0]->city }}" required autocomplete="city" autofocus>

                        @error('city')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                    </div>
                    <div class="row mb-3">
                        <label for="country" class="col-md-4 col-form-label">Country</label>

                        <input id="country" type="text" class="form-control @error('country') is-invalid @enderror" name="country" value="{{ old('country') ?? $offer[0]->country }}" required autocomplete="country" autofocus readonly>
                    </div>
                    <div class="row mb-3">
                        <label for="continent" class="col-md-4 col-form-label">Continent</label>

                        <input id="continent" type="text" class="form-control @error('continent') is-invalid @enderror" name="continent" value="{{ old('continent') ?? $offer[0]->continent }}" required autocomplete="continent" autofocus readonly>
                    </div>
                    <div>
                        <label for="departure_time">Departure time:</label>
                        <input type="datetime-local" name="departure_time" id="departure_time" />
                        @error('departure_time')
                            <p class="form-control">{{$message}}</p>
                        @enderror
                    </div>
                    <div>
                        <label for="arrival_time">Arrival time:</label>
                        <input type="datetime-local" name="arrival_time" id="arrival_time" />
                        @error('arrival_time')
                            <p class="form-control">{{$message}}</p>
                        @enderror
                    </div>
                    <div>
                        <label for="transport">Transport:</label>
                        <select name="transport" id="transport">
                            <option value="bus">Bus</option>
                            <option value="plane">Plane</option>
                            <option value="cruise">Cruise</option>
                            <option value="train">Train</option>
                            <option value="own transport">Own transport</option>
                        </select>
                        @error('transport')
                            <p class="form-control">{{$message}}</p>
                        @enderror
                    </div>
                    <div>
                        <label for="apartment">Apartment type:</label>
                        <select name="apartment" id="apartment">
                            <option value="hotel">Hotel</option>
                            <option value="bungalow">Bungalow</option>
                        </select>
                        @error('apartment')
                            <p class="form-control">{{$message}}</p>
                        @enderror
                    </div>
                    <div>
                        <label for="apartment_name">Apartment name:</label>
                        <input type="text" name="apartment_name" id="apartment_name"/>
                        @error('apartment_name')
                            <p class="form-control">{{$message}}</p>
                        @enderror
                    </div>
                    <div>
                        <label for="accomodation">Accomodation type:</label>
                        <select name="accomodation" id="accomodation">
                            <option value="1_1">1/1</option>
                            <option value="1_2">1/2</option>
                            <option value="1_2_and1">1/2 + 1</option>
                            <option value="1_3">1/3</option>
                            <option value="1_3_and1">1/3 + 1</option>
                            <option value="1_4">1/4</option>
                        </select>
                        @error('accomodation')
                            <p class="form-control">{{$message}}</p>
                        @enderror
                    </div>
                    <div>
                        <label for="stars">Stars:</label>
                        <input type="number" id="stars" name="stars" min="1" max="5" />
                        @error('stars')
                            <p class="form-control">{{$message}}</p>
                        @enderror
                    </div>
                    <div>
                        <label for="price">Price (€):</label>
                        <input type="number" id="price" name="price" min="100" max="3000" />
                        @error('price')
                            <p class="form-control">{{$message}}</p>
                        @enderror
                    </div>
                    <div>
                        <label for="has_internet">Internet:</label>
                        <select name="has_internet" id="has_internet">
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                        </select>
                        @error('has_internet')
                            <p class="form-control">{{$message}}</p>
                        @enderror
                    </div>
                    <div>
                        <label for="has_tv">TV:</label>
                        <select name="has_tv" id="has_tv">
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                        </select>
                        @error('has_tv')
                            <p class="form-control">{{$message}}</p>
                        @enderror
                    </div>
                    <div>
                        <label for="has_ac">AC:</label>
                        <select name="has_ac" id="has_ac">
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                        </select>
                        @error('has_ac')
                            <p class="form-control">{{$message}}</p>
                        @enderror
                    </div>
                    <div>
                        <label for="has_fridge">Fridge:</label>
                        <select name="has_fridge" id="has_fridge">
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                        </select>
                        @error('has_fridge')
                            <p class="form-control">{{$message}}</p>
                        @enderror
                    </div>
                    <div>
                        <label for="destination_image" class="col-md-4 col-form-label">Destination image</label>
                        <input type="file" class="form-control-file" id="destination_image" name="destination_image" >
                        @error('destination_image')
                            <strong>{{ $message }}</strong>
                        @enderror
                    </div>
                    <div class="row pt-3">
                        <button class="submit-btn btn btn-primary col-sm-6 col-md-3">Izmenite ponudu</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>
@endsection