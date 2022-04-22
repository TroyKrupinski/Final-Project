<!-- -------------------
Name: Troy Krupinski
Coding 07
using MVC to create a web app whilst implementing bootstrap, jquery and ajax
------------------- -->

<!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>  -->
<!-- For some reason, linking from googleapis is the only way to make this program run properly.
but haven't been able to properly diagnose it. -->
<script src = "assets/js/script.js"></script>

<link href="assets/css/bootstrap4.1.3.css" rel="stylesheet">
<link href = "assets/css/train.css" rel="stylesheet">
</head>
<div class = "to-top">
<body>           
                  <button id = "top">Top</button>
                  <button id = "bot">Bottom</button>
              </div>
          <div class="jumbotron bg-dark col-lg-6 col-centered text-white">
                  <h1 class="text-center">Chances <button class = "btn btn-primary" id = "help">?</button></h1>
                  <h2 class = "text-center" id = "tst"></h2>
                  
                </div>
              
                <div class="row">
                      <div class="col-lg-8 col-centered">
                        <div class="card card text-white bg-dark">
                          <div class="card-header">
                            
                          </div>
                          <div class="card-body">
                            <form>
                              <div class="form-group row">
                                <label for="lower-number">Targets</label>
                                <input class="form-control" id="target-number" type="number">
                                
                          </div>
                          <button class="btn btn-primary" id="submit-targets" type="submit">Submit</button>
                      </div>
  
  
         
                <div class="row">
                      <div class="col-lg-8 col-centered">
                <table class="table table-dark">
                  <thead>
                    <tr>
                      <th scope = "col">Index#</th>
                      <th scope="col">Pseudo-Random Numbers</th>
                      <th scope="col">Target Frequency</th>
                      <th scope = "col">Percentage</th>
                      <th scope = "col">% Happening Once or < </th>
  
                      
                    </tr>
                  </thead>
                  <tbody id = "sc">
                  
                   
                  </tbody>
                </table>
                      </div>
   <div class="row">
          <div class="col-lg-8 col-centered">
            <div class="card card text-white bg-dark">
              <div class="card-header">
                Data Entry
              </div>
              <div class="card-body">
                <form>
                    
                  <div class="form-group row">
                    <label for="lower-number">Min</label>
                    <input class="form-control" id="lower-number" type="number">
                    
                  </div>
                  <div class="form-group row">
                      <label for="upper-number">Max</label>
                      <input class="form-control" id="upper-number" type="number">
                    </div>
                  <div class="form-group row">
                    <label for="rep-number">Repetitions</label>
                    <input class="form-control" id="rep-number" type="number">
                  </div>
                
                    <div id = "tt">
                  </div>
                  <button class="btn btn-primary" id="submit-numbers" type="submit">Submit</button>
              
                </form>
                <button class = "btn btn-danger" id = "run-again">Again?</button>
                <button class = "btn btn-light" id = "auto-targ">Auto T?</button>
                <button class = "btn btn-light" id = "clear">Clear</button>
                <br>
                <button class = "btn btn-success" id = "loto">Lottery odds</button>
              </div>
            </div>
          </div>
        </div>
</body>