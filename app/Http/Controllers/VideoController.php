<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Video;
class VideoController extends Controller
{
    public function index()
    {
        
        $videos = Video::with('user')->orderBy('updated_at', 'desc')->get();
 
        return response()->json([
            'success' => true,
            'data' => $videos
        ]);
    }
 
    public function show($id)
    {
        $video = Video::with('user')->find($id);
 
        if (!$video) {
            return response()->json([
                'success' => false,
                'message' => 'Video not found '
            ], 400);
        }
 
        return response()->json([
            'success' => true,
            'data' => $video->toArray()
        ], 200);
    }
 
    public function store(Request $request)
    {


        $file = $request->file('video');
        $fileName = $file->getClientOriginalName();
        $extension = $file->getClientOriginalExtension();;
 
        $file->move(public_path('videos/'), $fileName);

        $video = Video::create([
            'video' => 'videos/'.$fileName,
            'description' => $request->description,
            'user_id' => auth()->user()->id,
            'views' => 0
        ]); 
        if ($video)
            return response()->json([
                'success' => true,
                'data' => $video->toArray()
            ]);
        else
            return response()->json([
                'success' => false,
                'message' => 'Video not added'
            ], 500);
    }
 
    public function update(Request $request, $id)
    {

        $file = $request->file('video');
        $fileName = $file->getClientOriginalName();
        $extension = $file->getClientOriginalExtension();;
 
        $file->move(public_path('videos/'), $fileName);

        $video = Video::find($id);

        if (!$video) {
            return response()->json([
                'success' => false,
                'message' => 'Video not found'
            ], 400);
        }
        
        $updated = $video->update([
            'video' => 'videos/'.$fileName,
            'description' => $request->description,
        ]); 
 
        if ($updated)
            return response()->json([
                'success' => true
            ]);
        else
            return response()->json([
                'success' => false,
                'message' => 'Video can not be updated'
            ], 500);
    }
 
    public function destroy($id)
    {
        $video = Video::find($id);
 
        if (!$video) {
            return response()->json([
                'success' => false,
                'message' => 'Video not found'
            ], 400);
        }
 
        if ($video->delete()) {
            return response()->json([
                'success' => true
            ]);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Video can not be deleted'
            ], 500);
        }
    }

    public function views(Request $request, $id)
    {
        $video = Video::find($id);
 
        if (!$video) {
            return response()->json([
                'success' => false,
                'message' => 'Video not found'
            ], 400);
        }

        $views = $video->views;
        $views = $views+1;
 
        $updated = $video->update(['views' => $views]);
 
        if ($updated)
            return response()->json([
                'success' => true
            ]);
        else
            return response()->json([
                'success' => false,
                'message' => 'Video can not be updated'
            ], 500);
    }
}
