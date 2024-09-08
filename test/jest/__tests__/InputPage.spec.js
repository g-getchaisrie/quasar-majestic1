<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JS-DOM</title>
</head>




<body>
    <div id="header">Computer Science@MJU</div>
    <div id="showname">My Name is :: </div>
    <p name="title"></p>
    <p name="title"></p>
    <p name="title"></p>
    <p name="title"></p>

    <div id="showproduct">
        <p>xxxxx</p>

    </div>


    <!-- button -->
    <p>Click the button to display the date.</p>
    <button onclick="displayDate()">The time is?</button>
    function displayDate() {
    document.getElementById("demo").innerHTML = Date();}


    <script>
        function displayDate() {
            document.getElementById("demo").innerHTML = Date();
        }
    </script>
    <p id="demo"></p>
</body>
<!-- End button -->

<!-- img & button  -->
<img src="download.jpg" width="100" id="neko" onmouseover="zomin()">

<button id="deleteImage" onclick="del()">ลบรูปภาพ</button>

<!-- End img & button  -->





<!-- java script -->
<script>
    document.getElementById('header').innerText = 'Maejo Unniversity'

    //ข้อความเดิมใน showname  + name แสดง
    // My Name is :: valentine
    let str = document.getElementById('showname').innerText;
    document.getElementById('showname').innerText = str + 'valentine';



    console.log
    document.getElementsByName('title').length;



    let students = [
        {
            name: 'A',
            gpa: 2.00,
            gender: 'm'

        }, {
            name: 'B',
            gpa: 3.50,
            gender: 'F'

        }, {
            name: 'C',
            gpa: 2.99,
            gender: 'M'

        }, {
            name: 'D',
            gpa: 3.99,
            gender: 'M'

        },
    ]

    document.getElementsByName('title')[1].innerText = 'Computer Science#2'
    let p = document.getElementsByName('title');
    p.forEach((item, index) => {
        // item = <p name="title"></p>
        item.innerText = (index + 1) + students[index].name;
    });



    let product = document.createElement('h1');
    product.innerText = 'My product'
    document.getElementById('header').appendChild(product);



</script>
<!-- End java script -->


</html>