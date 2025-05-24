// jQuery to handle the form submission and success message
$('#requestForm').on('submit', function(event) {
    event.preventDefault();  // Prevent page reload

    // Get form values
    var email = $('#email').val();
    var message = $('#message').val();

    // Store data in localStorage (optional)
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userMessage', message);

    // Hide form and show success message
    $('#requestForm').hide();
    $('#success-message').show();
});

$(document).ready(function(){
    // Use event delegation to handle dynamically added images
    $(document).on('click', "img[data-bs-toggle='modal']", function(){
        // Get the source of the clicked image
        var imgSrc = $(this).attr("src");
        // Set the modal image source to the clicked image
        $("#modalImage").attr("src", imgSrc);
    });
});


// ************************************** printing course content ****************************************
// Sample course data structure with YouTube and materials links added
const courses = {
    1: {
        title: 'C++ Programming Fundamentals',
        description: 'Learn the fundamentals of programming with essential concepts and hands-on practice to kickstart your coding journey!',
        topics: [
            'Flowchart', 'Input/Output', 'Variables', 'Operators', 'If Statements', 'Loop Statements', 
            'Nested Statements', 'Functions', 'Arrays', 'Struct', 'Object Oriented Programming', 'Pointers', 
            'Programming Exercises'
        ],
        prerequisites: ['None are Required'],
        tools: ['Code Blocks or any IDE or Online compiler'],
        screenshots: ['data/courses/1/1.png'],
        coverImage: 'data/courses/1/cover.jpg',
        youtube: 'https://www.youtube.com/channel/your-channel-or-video-link-1',
        materials: 'data/courses/1/materials.zip'  // <-- materials link
    },
    2: {
        title: 'Software Engineering for Beginners',
        description: 'Learn how to draw UML Diagrams and how to write requirements.',
        topics: [
            'Software Development Models', 'Requirement Engineering', 'Use Case Diagram', 'Use Case Description', 'Class Diagram', 'Sequence Diagram', 'Activity Diagram', 'Database Schema', 'Test Case', 'Exercises'
        ],
        prerequisites: ['OOP Knowledge'],
        tools: ['Microsoft Visio or any similar tool'],
        screenshots: ['data/courses/2/1.png'],
        coverImage: 'data/courses/2/cover.jpg',
        youtube: 'https://www.youtube.com/channel/your-channel-or-video-link-2',
        materials: 'data/courses/2/materials.zip'
    },
    3: {
        title: 'Full-Stack Web Development: PHP Native',
        description: 'Learn Front-End (HTML 5, CSS 3, JS, JQuery, AJAX, Bootstrap 5, Animate.css), and Back-End (PHP, MySQL).',
        topics: [
            'HTML 5', 'CSS 3', 'JavaScript', 'JQuery', 'Bootstrap 5', 'Animate.CSS', 'AJAX', 'XML & JSON', 'PHP', 'MySQL', 'MongoDB', 'Exercises'
        ],
        prerequisites: ['Programming Fundamentals'],
        tools: ['VS Code or Any Text Editor, Web Browser'],
        screenshots: ['data/courses/3/1.png', 'data/courses/3/2.png'],
        coverImage: 'data/courses/3/cover.jpg',
        youtube: 'https://www.youtube.com/channel/your-channel-or-video-link-3',
        materials: 'data/courses/3/materials.zip'
    },
    4: {
        title: 'Data Analytics for Beginners',
        description: 'Learn Core Concepts Data Collection, Exploration, Preprocessing, Mining, Evaluation, and Visualization Using Python.',
        topics: [
            'Essentials', 'Data Exploration', 'Data Preprocessing', 'Association', 'Classification', 'Clustering', 'Evaluation', 'Visualization', 'Exercises'
        ],
        prerequisites: ['Programming Fundamentals'],
        tools: ['Python using Google Colab or any similar tool'],
        screenshots: ['data/courses/4/1.png'],
        coverImage: 'data/courses/4/cover.jpg',
        youtube: 'https://www.youtube.com/channel/your-channel-or-video-link-4',
        materials: 'data/courses/4/materials.zip'
    },
    5: {
        title: 'Data Mining Via Generative AI using Gemini',
        description: 'Learn the different types of prompt engineering techniques, and how to use Generative AI for data analytics.',
        topics: [
            'Generative AI & Transformers', 'Capabilities of Generative AI', 'Prompt Engineering', 'Fine Tuning', 'Generative AI in Data Mining', 'Exercises'
        ],
        prerequisites: ['Programming Fundamentals'],
        tools: ['Python using Google Colab or any similar tool'],
        screenshots: ['data/courses/5/1.png'],
        coverImage: 'data/courses/5/cover.jpg',
        youtube: 'https://www.youtube.com/channel/your-channel-or-video-link-5',
        materials: 'data/courses/5/materials.zip'
    },
    6: {
        title: 'Prewriting Stage of Storywriting',
        description: 'Learn the core concepts of storywriting, ranging from developing the idea to the key elements of the story. (Important for Game Developers)',
        topics: [
            'Brainstorming', 'Characters', 'Settings', 'Plots', 'Outlines', 'Tips, Tricks, and Mistakes'
        ],
        prerequisites: ['None are Required'],
        tools: ['Scrivener or any word processing software, and any Spreadsheet application (Optional)'],
        screenshots: ['data/courses/6/1.png', 'data/courses/6/2.png', 'data/courses/6/3.png', 'data/courses/6/4.png'],
        coverImage: 'data/courses/6/cover.jpg',
        youtube: 'https://www.youtube.com/channel/your-channel-or-video-link-6',
        materials: 'data/courses/6/materials.zip'
    }
};

// Function to generate course content dynamically
function generateCourseContent(courseId) {
    const course = courses[courseId];

    if (!course) {
        return '<p>Course will be available soon.</p>';
    }

    // Generate course content HTML
    return `
    <!-- Main Course Content Section -->
<div class="row">
    <!-- Course Info Section -->
    <div class="col-md-8">
        <div class="container-fluid bg-light py-3 rounded border mb-4">
            <div class="row px-2">
                <div class="col-md-5">
                    <!-- Course Image -->
                    <img src="${course.coverImage}" class="imgItem img-fluid rounded border" alt="Course Image" style="max-width: 100%;" data-bs-toggle="modal" data-bs-target="#imageModal">
                </div>
                <div class="col-md-7">
                    <h4 class="rounded fw-bold mt-1">${course.title}</h4>
                    <!-- Short Description -->
                    <p class="mt-2">${course.description}</p>
                    
                    <!-- Button and YouTube Link Wrapper -->
                    <div style="display: flex; align-items: center; gap: 15px;">
                        <!-- YouTube Link -->
                        <a href="${course.youtube}" target="_blank" rel="noopener noreferrer" style="color: black; text-decoration: none; font-size: 32px; display: flex; align-items: center; gap: 5px; transition: color 0.3s ease;"
                           onmouseover="this.style.color='red'" 
                           onmouseout="this.style.color='black'">
                            <i class="fab fa-youtube"></i>
                        </a>
                        <!-- Download Button -->
                        <a href="${course.materials}" target="_blank" rel="noopener noreferrer" class="btn btn-custom rounded-pill">
                            Download Materials
                        </a>

                    </div>
                </div>
                
            </div>
        </div>

        <!-- Topics List -->
        <h4 style="border-left: 8px solid #cc0000;" class="px-2 fw-bold animate__animated animated-element-1 bg-light rounded py-1">Course Content</h4>
        <ul class="animate__animated animated-element-2">
            ${course.topics.map(topic => `<li>${topic}</li>`).join('')}
        </ul>

        <!-- Prerequisites -->
        <h4 style="border-left: 8px solid #cc0000;" class="px-2 fw-bold animate__animated animated-element-1 bg-light rounded py-1">Prerequisites</h4>
        <ul class="animate__animated animated-element-2">
            ${course.prerequisites.map(prerequisite => `<li>${prerequisite}</li>`).join('')}
        </ul>

        <!-- Tools -->
        <h4 style="border-left: 8px solid #cc0000;" class="px-2 fw-bold animate__animated animated-element-1 bg-light rounded py-1">Tools</h4>
        <ul class="animate__animated animated-element-2">
            ${course.tools.map(tool => `<li>${tool}</li>`).join('')}
        </ul>

        <!-- Screenshots -->
        <h4 style="border-left: 8px solid #cc0000;" class="px-2 fw-bold animate__animated animated-element-1 bg-light rounded py-1">Screenshots</h4>
        <div class="container-fluid animate__animated animated-element-2 mb-3">
            <div class="row">
            ${course.screenshots.map(screenshot => `
                <div class="col-md-3">
                    <img src="${screenshot}" class="imgItem img-fluid rounded border" alt="Screenshot" style="max-width: 100%;" data-bs-toggle="modal" data-bs-target="#imageModal">
                </div>
            `).join('')}
            </div>
        </div>

    </div>
    <!-- Ad Area -->
    <div class="col-md-3 text-center">
        <a id="ad1" href="https://www.youtube.com/@bakrtechacademy" class="imgItem"><img src="assets/images/ad.jpg" alt="Advertisement" class="img-fluid rounded"></a>
    </div>
</div>
    `;
}

// Event listener to handle button click and inject content
$(document).on('click', '.btnItem', function () {
    const courseId = $(this).attr('id'); // Get the course ID using the 'id' attribute
    const content = generateCourseContent(courseId); // Generate the course content
    $('main').html(content); // Inject content into the <main> section

    // Update active class
    $('.btnItem').removeClass('btnItem-active');
    $(this).addClass('btnItem-active');

    // Update the URL without reloading the page
    const newUrl = `${window.location.pathname}?id=${courseId}`;
    window.history.pushState({ path: newUrl }, '', newUrl);
});

// get id and click it
$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const idFromURL = urlParams.get('id'); // e.g., 'CS101'

    if (idFromURL) {
        // Simulate a click on the button with that ID
        $('#' + idFromURL).trigger('click');
    }
});
