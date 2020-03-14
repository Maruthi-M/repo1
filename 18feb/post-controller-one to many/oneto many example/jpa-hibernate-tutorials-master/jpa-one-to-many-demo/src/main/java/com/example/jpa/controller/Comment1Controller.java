package com.example.jpa.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.jpa.exception.ResourceNotFoundException;
import com.example.jpa.model.Comment;
import com.example.jpa.model.Comment1;
import com.example.jpa.repository.Comment1Repository;
import com.example.jpa.repository.PostRepository;

@RestController
public class Comment1Controller {

    @Autowired
    private Comment1Repository comment1Repository;

    @Autowired
    private PostRepository postRepository;

    @GetMapping("/posts/{postId}/comments1")
    public Page<Comment1> getAllCommentsByPostId(@PathVariable (value = "postId") Long postId,
                                                Pageable pageable) {
        return comment1Repository.findByPostId(postId, pageable);
    }
    
    @PostMapping("/posts/{postId}/comments1")
    public Comment1 createComment(@PathVariable (value = "postId") Long postId,
                                 @Valid @RequestBody Comment1 comment1) {
        return postRepository.findById(postId).map(post -> {
            comment1.setPost(post);
            return comment1Repository.save(comment1);
        }).orElseThrow(() -> new ResourceNotFoundException("PostId " + postId + " not found"));
    }

    @PutMapping("/posts/{postId}/comments1/{commentId}")
    public Comment1 updateComment(@PathVariable (value = "postId") Long postId,
                                 @PathVariable (value = "commentId") Long commentId,
                                 @Valid @RequestBody Comment1 commentRequest) {
        if(!postRepository.existsById(postId)) {
            throw new ResourceNotFoundException("PostId " + postId + " not found");
        }

        return comment1Repository.findById(commentId).map(comment1 -> {
            comment1.setText(commentRequest.getText());
            return comment1Repository.save(comment1);
        }).orElseThrow(() -> new ResourceNotFoundException("CommentId " + commentId + "not found"));
    }
    @DeleteMapping("/posts/{postId}/comments/{commentId}")
    public ResponseEntity<?> deleteComment(@PathVariable (value = "postId") Long postId,
                              @PathVariable (value = "commentId") Long commentId) {
        return comment1Repository.findByIdAndPostId(commentId, postId).map(comment -> {
            comment1Repository.delete(comment);
            return ResponseEntity.ok().build();
        }).orElseThrow(() -> new ResourceNotFoundException("Comment not found with id " + commentId + " and postId " + postId));
    }
}
