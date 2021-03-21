<button {{ $attributes->merge(['class' => "button" . " " . $buttonVariant . " " . $buttonKind . " " . $buttonRadius . " " . $buttonSize]) }}>
{{--    <button class="{{ $types[$type] }}">--}}
        {!! $message ?? $slot !!}
{{--{{ var_dump($kind['solid']) }}--}}
</button>

{{--<button {{ $attributes->merge(['class' => $kind]) }}>--}}
{{--    {!! $message ?? $slot !!}--}}
{{--</button>--}}
