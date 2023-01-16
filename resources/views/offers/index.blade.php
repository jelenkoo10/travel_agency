@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <!-- <a href="http://127.0.0.1:8000/offer/create">Add new offer</a> -->
        <div class="col-md-8">
            @unless ($offers->isEmpty())
                @foreach ($offers as $offer)
                    <div class="card">
                        <a href="http://127.0.0.1:8000/offer/{{ $offer->id }}">
                            <p class="location">{{$offer->city}}, {{$offer->country}}</p>
                            <!-- <a href="http://127.0.0.1:8000/offer/update">Update offer</a> -->
                        </a>
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
