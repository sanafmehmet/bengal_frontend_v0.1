<?php

namespace App\Models\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    public function getDeadlineAttribute($date)
    {
        return $date ? date('m/d/Y', strtotime($date)) : null;
    }
}
