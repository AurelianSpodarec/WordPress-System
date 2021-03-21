<?php

namespace App\View\Components;

use Roots\Acorn\View\Component;

class Button extends Component
{

    // TODO: Add error handling

    public $buttonVariant;
    public $buttonKind;
    public $buttonRadius;
    public $buttonSize;

    public $message;


    public $variant = [
        'primary'   => 'primary',
        'secondary' => 'secondary',
        'teritary'  => 'teritary',
        'success'   => 'success',
        'warning'   => 'warning',
        'danger'    => 'danger',
        'info'      => 'blue',
        'white'     => 'white',
    ];

    public $kind = [
        'solid'   => 'solid',
        'outline' => 'black',
        'clear'   => 'black',
    ];

    public $radius = [
        'none'   => 'none',
        'small'  => 'small',
        'medium' => 'black',
        'large'  => 'black',
        'full'   => 'full',
    ];

    public $size = [
        'sm'     => 'sm',
        'medium' => 'medium',
        'large'  => 'large',
    ];


    public function __construct($variant = 'primary', $kind = 'solid', $radius = 'none', $size = 'medium', $message = null)
    {
        $this->buttonVariant = $this->variant[$variant] ?? $this->variant['default'];
        $this->buttonKind = $this->kind[$kind] ?? $this->kind['default'];
        $this->buttonRadius = $this->radius[$radius] ?? $this->radius['medium'];
        $this->buttonSize = $this->size[$size] ?? $this->size['medium'];

        $this->message = $message;
    }


    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\View\View|string
     */
    public function render()
    {
        return $this->view('components.button');
    }
}
