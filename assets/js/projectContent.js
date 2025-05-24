$(document).ready(function(){
    // Use event delegation to handle dynamically added images
    $(document).on('click', "img[data-bs-toggle='modal']", function(){
        var imgSrc = $(this).attr("src");
        $("#modalImage").attr("src", imgSrc);
    });

    // On page load: check URL param and simulate click if exists
    const urlParams = new URLSearchParams(window.location.search);
    const idFromURL = urlParams.get('id');
    if (idFromURL) {
        $('#' + idFromURL).trigger('click');
    }
});

// Sample course data structure with project links
const courses = {
    1: {
        title: 'Story-Based Game',
        description: 'Web-Based Story-Based Game with 2-Player Turn-Based Combat Subsystem with Multi-Difficulty AI',
        topics: ['Dialogues', 'Turn-Based Combat', '2 Player Combat', 'Multiple Difficulties AI for Combat', 'AI Voice Actors'],
        prerequisites: ['None are Required'],
        tools: ['HTML 5, CSS 3, JS, Bootstrap 4, Animate.CSS, JQuery, AJAX, XML, Photoshop, Illustrator'],
        screenshots: ['data/projects/1/1.png', 'data/projects/1/2.png', 'data/projects/1/3.png', 'data/projects/1/4.png'],
        coverImage: 'data/projects/1/cover.jpg',
        projectLink: 'https://example.com/story-based-game'
    },
    2: {
        title: 'Artz: Visual Novel Builder & E-Commerce Website',
        description: 'E-Commerce and Builder Website for Visual Novels',
        topics: ['Buying & Selling Visual Novels', 'Creating & Editing Visual Novels', 'Play Visual Novels'],
        prerequisites: ['OOP Knowledge'],
        tools: ['HTML 5, CSS 3, JS, JQuery, AJAX, XML, Bootstrap, Animate.CSS, PHP, MySQL'],
        screenshots: ['data/projects/2/1.png', 'data/projects/2/2.png', 'data/projects/2/3.png', 'data/projects/2/4.png', 'data/projects/2/5.png'],
        coverImage: 'data/projects/2/cover.jpg',
        projectLink: 'https://example.com/artz-visual-novel-builder'
    },
    3: {
        title: 'My School',
        description: 'Website for parents to apply for schools, and has a request form builder',
        topics: ['School Profile', 'Search via List and Map', 'Request Form Builder', 'Appointments System'],
        prerequisites: ['Programming Fundamentals'],
        tools: ['HTML 5, CSS 3, JS, JQuery, AJAX, XML, Bootstrap 4, PHP, MySQL'],
        screenshots: ['data/projects/3/1.png', 'data/projects/3/2.png', 'data/projects/3/3.png', 'data/projects/3/4.png', 'data/projects/3/5.png', 'data/projects/3/6.png', 'data/projects/3/7.png'],
        coverImage: 'data/projects/3/cover.jpg',
        projectLink: 'https://example.com/my-school'
    },
    4: {
        title: 'Rainmeter Creator',
        description: 'Desktop App that Creates rainmeter desktop skins',
        topics: ['Rainmeter Desktops', 'Rainmeter Skins Creator'],
        prerequisites: ['Programming Fundamentals'],
        tools: ['Rainmeter, C# .Net'],
        screenshots: ['data/projects/4/1.png', 'data/projects/4/2.png', 'data/projects/4/3.png', 'data/projects/4/4.png', 'data/projects/4/5.png'],
        coverImage: 'data/projects/4/cover.jpg',
        projectLink: 'https://example.com/rainmeter-creator'
    }
};

// Generate course content dynamically with projectLink in button
function generateCourseContent(courseId) {
    const course = courses[courseId];
    if (!course) {
        return '<p>Course will be available soon.</p>';
    }
    return `
<div class="row">
    <div class="col-md-8">
        <div class="container-fluid bg-light py-3 rounded border mb-4">
            <div class="row px-2">
                <div class="col-md-5">
                    <img src="${course.coverImage}" class="imgItem img-fluid rounded border" alt="Course Image" style="max-width: 100%;" data-bs-toggle="modal" data-bs-target="#imageModal">
                </div>
                <div class="col-md-7">
                    <h4 class="rounded fw-bold mt-1">${course.title}</h4>
                    <p class="mt-2">${course.description}</p>
                    <div style="display: flex; align-items: center; gap: 15px;">
                        <a href="${course.projectLink || 'unavailable.html'}" target="_blank" class="btn btn-custom rounded-pill">
                            View Project
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <h4 style="border-left: 8px solid #cc0000;" class="px-2 fw-bold animate__animated animated-element-1 bg-light rounded py-1">Project Content</h4>
        <ul class="animate__animated animated-element-2">
            ${course.topics.map(topic => `<li>${topic}</li>`).join('')}
        </ul>

        <h4 style="border-left: 8px solid #cc0000;" class="px-2 fw-bold animate__animated animated-element-1 bg-light rounded py-1">Tools</h4>
        <ul class="animate__animated animated-element-2">
            ${course.tools.map(tool => `<li>${tool}</li>`).join('')}
        </ul>

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
    <div class="col-md-3 text-center">
        <a id="ad1" href="https://www.youtube.com/@bakrtechacademy" class="imgItem"><img src="assets/images/ad.jpg" alt="Advertisement" class="img-fluid rounded"></a>
    </div>
</div>
    `;
}

// Click handler for buttons with .btnItem class
$(document).on('click', '.btnItem', function () {
    const courseId = $(this).attr('id');
    const content = generateCourseContent(courseId);
    $('main').html(content);

    $('.btnItem').removeClass('btnItem-active');
    $(this).addClass('btnItem-active');

    const newUrl = `${window.location.pathname}?id=${courseId}`;
    window.history.pushState({ path: newUrl }, '', newUrl);
});
