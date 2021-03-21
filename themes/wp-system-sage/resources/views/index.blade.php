@extends('layouts.app')

@section('content')
    @include('partials.page-header')

    <h2>Buttons</h2>

    <x-button variant="primary" kind="solid">Primary</x-button>
    <x-button variant="secondary" kind="solid">Secondary</x-button>
    <x-button variant="success" kind="solid">Success</x-button>
    <x-button variant="warning" kind="solid">Warning</x-button>
    <x-button variant="danger" kind="solid">Danger</x-button>
    <x-button variant="info" kind="solid">Info</x-button>
    {{--    <x-button variant="info">Light</x-button>--}}
    {{--    <x-button variant="info">Dark</x-button>--}}
    {{--    <x-button variant="link">Link</x-button>--}}
    <h2>Outline Buttons</h2>
    <x-button variant="primary" kind="outline">Primary</x-button>
    <x-button variant="secondary" kind="outline">Secondary</x-button>
    <x-button variant="success" kind="outline">Success</x-button>
    <x-button variant="warning" kind="outline">Warning</x-button>
    <x-button variant="danger" kind="outline">Danger</x-button>
    <x-button variant="info" kind="outline">Info</x-button>

    <h2>Sizes</h2>
    {{--Size/block--}}

    <h2>Active State</h2>
    <h2>Disabled State</h2>

    <h2>Button Loading State</h2>
@endsection
