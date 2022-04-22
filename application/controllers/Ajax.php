<?php
class Ajax extends CI_Controller {

    public function processnames() {

        // make sure caller is an ajax request
        if ($this->input->is_ajax_request()){
        
            
            $fname = strip_tags(trim($this->input->post('fname')));
            $lname = strip_tags(trim($this->input->post('lname')));
            $ename = strip_tags(trim($this->input->post('ename')));
            // echo "$ename";
            // echo " $lname";
            // echo " $fname";
            // echo " trim complete"     ;
            // use and/or process your data
            if(!empty($fname) && !empty($lname) && !empty($ename)){
                // output
                echo "Thank you for sending us an email, $fname";
                echo " $lname";
                echo " email given = $ename";
                
            } else {
                // output
                echo "Error in output";
                echo $fname;
            }
        } else {

            echo "first fail";
        }
    }


    public function index() {

        echo "";
    }
}
