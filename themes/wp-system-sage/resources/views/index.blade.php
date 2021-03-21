@extends('layouts.app')

@section('content')
    @include('partials.page-header')

    <h2>Buttons</h2>

    <x-button variant="secondary" kind="solid">Primary</x-button>

    <x-alert>
        {!! __('Sorry, no results were found.', 'sage') !!}
    </x-alert>


{{--    <x-button variant="primary" kind="solid">Primary</x-button>--}}
{{--    <x-button variant="secondary">Secondary</x-button>--}}
{{--    <x-button variant="success">Success</x-button>--}}
{{--    <x-button variant="warning">Warning</x-button>--}}
{{--    <x-button variant="danger">Danger</x-button>--}}
{{--    <x-button variant="info">Info</x-button>--}}
    {{--    <x-button variant="info">Light</x-button>--}}
    {{--    <x-button variant="info">Dark</x-button>--}}
    {{--    <x-button variant="link">Link</x-button>--}}
    <h2>Outline Buttons</h2>

    <h2>Sizes</h2>
    {{--Size/block--}}

    <h2>Active State</h2>
    <h2>Disabled State</h2>

    <h2>Button Loading State</h2>
@endsection
