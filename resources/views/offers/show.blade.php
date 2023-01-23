@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <h3>{{$offer[0]->offer_name}}</h3>
                <p>{{$offer[0]->apartment_name}} - {{$offer[0]->city}}, {{$offer[0]->country}}</p>
                <p>Type of apartment: {{$offer[0]->accomodation}} rooms</p>
                <p>Departure time: {{$offer[0]->departure_time}}</p>
                <p>In the room, you have: {{ $offer[0]->has_internet == 1 ? 'internet, ' : ''}} {{ $offer[0]->has_tv == 1 ? 'TV' : ''}} {{ $offer[0]->has_ac == 1 ? 'AC, ' : ''}} {{ $offer[0]->has_fridge == 1 ? 'fridge, ' : ''}}</p>
                <h4>Program: </h4>
                <p>Departure from {{ $offer[0]->transport == 'train' ? 'railway station ' : 'bus station'}} in {{$offer[0]->departure_time}}.</p> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim perferendis quas unde magnam nemo? Nisi, dicta molestiae. Molestias impedit corrupti eaque recusandae minus hic blanditiis minima quia. Possimus soluta esse veritatis rerum animi nesciunt magnam perspiciatis asperiores! Pariatur ea consequuntur saepe, amet, rem sint aperiam eius deserunt facere odit quia numquam deleniti enim quaerat! Excepturi laborum impedit deleniti nesciunt dolore error blanditiis. Quo veritatis ducimus quidem sapiente consequatur tempora amet, ratione quasi dolor, ut, dignissimos fugiat assumenda rem reiciendis expedita nulla inventore voluptatum nam sequi eum autem omnis beatae adipisci. Cum excepturi impedit ipsum ullam cumque, beatae, distinctio harum quisquam aliquid voluptas quaerat consequuntur accusantium velit necessitatibus, nisi vero deleniti quae! A, alias quisquam. Quia dolorem delectus eum ex aspernatur?</p>
                <p>Arrival to {{ $offer[0]->city }} in {{$offer[0]->arrival_time}}.</p> 
                @auth
                    <a href="/offer/{{$id}}/update" class="text-sm text-gray-700 dark:text-gray-500 underline">Change arrangement</a>
                @else
                    <a href="/offer/{{$id}}/reservation" class="text-sm text-gray-700 dark:text-gray-500 underline">Create reservation</a>
                @endauth
            </div>
        </div>
    </div>
</div>
@endsection