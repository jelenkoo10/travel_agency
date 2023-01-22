@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <form action="/offer/{{ $offer[0]->id }}/update" enctype="multipart/form-data" method="post">
            <!-- @csrf
            @method('PATCH') -->

            <div class="row">
                <div class="col-8 offset-2">
                    <div class="row">
                        <h1>Unesite podatke o rezervaciji</h1>
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
                        <label for="country" class="col-md-4 col-form-label">Država</label>

                        <input id="country" type="text" class="form-control @error('country') is-invalid @enderror" name="country" value="{{ old('country') ?? $offer[0]->country }}" required autocomplete="country" autofocus>

                        @error('country')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                    </div>
                    <div class="row mb-3">
                        <label for="continent" class="col-md-4 col-form-label">Kontinent</label>

                        <input id="continent" type="text" class="form-control @error('continent') is-invalid @enderror" name="continent" value="{{ old('continent') ?? $offer[0]->continent }}" required autocomplete="continent" autofocus>

                        @error('continent')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                    </div>
                    <!-- <div class="row">
                        <label for="image" class="col-md-4 col-form-label">Profile image</label>

                        <input type="file"
                        class="form-control-file"
                        id="image" name="image" >

                        @error('image')
                            <strong>{{ $message }}</strong>
                        @enderror
                    </div> -->
                    <div class="row pt-3">
                        <button class="btn btn-primary col-sm-4 col-md-2">Izmenite rezervaciju</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>
@endsection