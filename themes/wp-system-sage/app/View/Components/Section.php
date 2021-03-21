<?php

namespace App\View\Components;

use Roots\Acorn\View\Component;

class Section extends Component
{

    public $children;


    public function __construct( $children = null)
    {
        $this->children = $children;
    }


    public function render()
    {
        return $this->view('components.section');
    }
}
