
/*
Filename: app.js
Description: Assignment02
21F-CST8285-303
Author: Mehri Gharacheh
Last Modified: Nov 14, 2021
Lab professor: Alemeseged Legesse
*/

/**
 * DATA array object list of courses
 * the data is coppied from "https://www.algonquincollege.com/sat/program/computer-programming/#courses"
 */

 var courses = [
    {
        code: "CST8101",                      //object's items and their values seperated by ","
        name: "Computer Essentials",
        description: "The essentials of computer software, hardware, and laptop management form \
        the foundation for building further technical programming skills. Learn to configure your laptop \
        environment, basic PC and troubleshoot problems. Create backups, install virus protection, \
        and manage files through a basic understanding of the Windows Operating System. Install \
        and configure the Windows Operating System, and a virtual machine environment. Explore computer \
        organization including basic numerical systems, functional hardware and software components needed to run programs.",
        level: 1,
        imageSrc: 'images/courses/essential.jpg',
    },
    {
        code: "CST8116",
        name: "Introduction to Computer Programming",
        description: "Possessing the fundamentals of logic, problem-solving and programming language \
        structure provides a solid foundation for further study in the field. Students develop\
         introductory knowledge of computer programming with emphasis on problem analysis and \
         design, using algorithms, pseudocode, flowcharts, UML Class Diagrams and testing, with\
          the Java programming language used as a means to implement problem solution designs. \
          Through an introduction to the Java programming language students use sequential structures, \
          selection structures, repetition structures, variables, constants, methods, constructors, \
          one-dimensional arrays, object-oriented programming, classes, objects, abstraction, encapsulation, \
          inputs, outputs, coding conventions and documentation. Theory is reinforced with application by \
          means of practical laboratory assessments.",
        level: 1,
        imageSrc: 'images/courses/programing.jpg',
    },
    {
        code: "CST8215",
        name: "Introduction to Database",
        description: "Students learn the fundamentals of Relational Databases design using Entity Relation \
        diagrams, and use SQL to create, modify and query a database. Students design and create databases \
        that are maintainable, secure and adaptable to change in business requirements, using Normalization. \
        Students are able to compare and appreciate a Database Management System (DBMS) and its components \
        with legacy systems.",

        level: 1,
        imageSrc: 'images/courses/database.jpg',
    },
    {
        code: "CST830",
        name: "Achieving Success in Changing Environments",
        description: "Rapid changes in technology have created personal and employment choices that \
        challenge each of us to find our place as contributing citizens in the emerging society. Life \
        in the 21st century presents significant opportunities, but it also creates potential hazards and\
         ethical problems that demand responsible solutions. Students explore the possibilities ahead, assess \
         their own aptitudes and strengths, and apply critical thinking and decision-making tools to help resolve\
          some of the important issues in our complex society with its competing interests.",

        level: 1,
        imageSrc: 'images/courses/success.jpg',
    },
    {
        code: "ENL1813T",
        name: "Communications I",
        description: "Communication remains an essential skill sought by employers, \
        regardless of discipline or field of study. Using a practical, vocation-oriented approach, \
        students focus on meeting the requirements of effective communication. Through a combination of \
        lectures, exercises, and independent learning, students practise writing, speaking, reading, listening, \
        locating and documenting information and using technology to communicate professionally. Students develop \
        and strengthen communication skills that contribute to success in both educational and workplace environments.",
        level: 1,
        imageSrc: 'images/courses/communication.jpg',
    },
    {
        code: "MAT8001C",
        name: "Technical Mathematics for Computer Science",
        description: "The study of algebraic and transcendental functions is an essential prerequisite to Calculus. \
        Students manipulate algebraic expressions, solve algebraic equations and linear systems and learn the properties \
        of and graph algebraic and transcendental functions. Students investigate computer number systems in addition \
        to Boolean algebra and logic to help solve problems involving computer systems. Students also study the addition \
        and subtraction of vectors using vector components. Delivered in a modular format, this course is equivalent to\
         the completion of all of the following math modules MAT8100 - A, B, C, D, E, F, and L.",
        level: 1,
        imageSrc: 'images/courses/mathematics.jpg',
    },
    {
        code: "CST2355",
        name: "Database Systems",
        description: "Students acquire practical experience using market-leading object-relational database \
        management systems like Oracle and MySQL. Students obtain hands-on experience with advanced engineering \
        modeling tools along with SQL, SQL scripts and programming with Oracle's PL/SQL blocks. Database concepts \
        covered include advanced SQL, case structures, rollup and cube operations, metadata manipulation, data storage \
        and retrieval, security and transaction control and data warehousing. Open source database software is also explored.",
        level: 2,
        imageSrc: 'images/courses/database2.jpg',
    },
    {
        code: "CST8102",
        name: "Operating System Fundamentals (GNU/Linux)",
        description: "Learn the basic concepts and components of Operating Systems (OS), and how they function \
        and interact with hardware and software components. Explore the details of operating system structures, \
        process management, storage management, installation, configuration, and administration both in theory \
        and through practical assignments based on the GNU/Linux operating system. Lab exercises are designed to \
        demonstrate how to implement the theory by developing skills using the powerful GNU/Linux command-line tools \
        and utilities.",

        level: 2,
        imageSrc: 'images/courses/ops.jpg',
    },
    {
        code: "CST8284",
        name: "Object Oriented Programming (Java)",
        description: "Learn object oriented programming methodology using the Java programming language.\
         Object oriented concepts, such as encapsulation, inheritance, abstraction and polymorphism are \
         covered and reinforced with practical applications.",

        level: 2,
        imageSrc: 'images/courses/java.jpg',
    },
    {
        code: "CST8285",
        name: "Web Programming",
        description: "Learn the basics of web programming, website design and implementation. JavaScript, \
        HTML5, and PHP are used to explore web-based solutions to problems of increasing interactivity and \
        complexity. Lectures are reinforced by practical assignments that encourage students to construct \
        and maintain their own websites.",

        level: 2,
        imageSrc: 'images/courses/web.jpg',
    },
    {
        code: "ENL2019T",
        name: "Technical Communication for Engineering Technologies",
        description: "The ability to communicate effectively in a technically-oriented interdisciplinary workplace\
         is a foundational skill in an innovation-driven economy. Students are exposed to exercises and assignments\
          designed to foster independent and collaborative critical thinking, research, writing, visual communication\
           and presentation skills related to technical topics.",

        level: 2,
        imageSrc: 'images/courses/technical.jpg',
    },
    {
        code: "GEP1001",
        name: "Cooperative Education Readiness",
        description: "Students are guided through a series of activities which prepares them for their co-op job \
         search term.  Through a detailed orientation students learn the cooperative education program policies and \
          procedures related to searching and securing a work term opportunity.  Students identify their \
          strengths and transferable skills and participate in workshop style sessions that focus on cover \
          letter and resume development, interview techniques and job search strategies.  Students learn how\
           to navigate HireAC where employers post cooperative education job opportunities.  Students reflect\
            on workplace success, ethics and responsibilities.",

        level: 2,
        imageSrc: 'images/courses/education.jpg',
    },
    {
        code: "GED0336",
        name: "General Education Elective",
        description: "Students choose one course, from a group of general education electives, which meets \
        one of the following four requirements: Arts in Society, Civic Life, Social and Cultural Understanding\
        , and Science and Technology.",

        level: 2,
        imageSrc: 'images/courses/general.jpg',
    },

    {
        code: "CST2234",
        name: "Systems Analysis and Design",
        description: "Guided by industry standard software engineering methodologies, students gain hands-on \
        experience with case studies used to develop systems from inception through elaboration, construction\
         and transition phases. Object-oriented design, modeling tools and techniques are used to produce\
          system specifications. Project management principles are also used within team developed projects. \
          Software methodologies discussed include the systems development life cycle (SDLC), agile approach,\
           rational unified process (RUP)and rapid application development (RAD).",
        level: 3,
        imageSrc: 'images/courses/system.jpg',
    },
    {
        code: "CST2335",
        name: "Mobile Graphical Interface Programming",
        description: "Students explore graphical user interface programming in a mobile Android environment. \
        Students learn how to program applications using the latest Android development tools. Topics include\
         application architecture, interface design, network communication, and database integration.",
        level: 3,
        imageSrc: 'images/courses/mobile.jpg',
    },
    {
        code: "CST8109",
        name: "Network Programming",
        description: "Software programming in today's environment requires detailed knowledge of the underlying\
         network topology, its implementation and programming support functions. Gaining an appreciation and \
         perspective of this technology is imperative to developing good network programming applications. \
         Students explore topics including the basic structure, design and layered communications models, with an \
         emphasis on data communications, TCP/IP protocol suite, socket programming and multi-threading concepts.\
          Labs include practical exercises in basic networking and using socket programming, along with multi-threading,\
           in an environment rich with common networking tools for diagnosing and troubleshooting typical network\
            programming problems. ",
        level: 3,
        imageSrc: 'images/courses/network.jpg',
    },
    {
        code: "CST8288",
        name: "Object Oriented Programming with Design Patterns",
        description: "Implement the best practices of object oriented program development with software design \
        patterns. Apply UML program specifications in the Java programming language. Use embedded SQL through JDBC\
         for developing and using \"data access objects\". Course topics include refactoring, domain modelling, \
         JDBC and multithreaded servlet programming. Students develop proficiency in creating, testing, debugging,\
          deploying and documenting programs and servlets through practical application.",
        level: 3,
        imageSrc: 'images/courses/oop.jpg',
    },
    {
        code: "CST8283",
        name: "Business Programming",
        description: "Create COBOL programs in a business environment using structured methodology\
         in the latest visual programming environment. Topics include: output design; logic design tools; \
         structured, top-down and modular coding; testing and debugging; and documentation. The\
          programs include interactive, file-based, and database processing of data related to business\
           problems. Arrays, indexed files, database access and sub-programs are included.",
        level: 3,
        imageSrc: 'images/courses/business.jpg',
    },
    {
        code: "CST839",
        name: "Business Intelligence and Data Analytics",
        description: "Business Intelligence (BI) can be broadly defined as a set of applications,\
         infrastructure, and best practices that integrate and transform raw data into actionable information\
          used for planning, monitoring and analyzing processes. The foundation underlying this process is the\
           Data Analytics that explore the data, identify the relationships and patterns in a meaningful way.\
            Students examine the components and best practices of Business Intelligence technology, and \
            how it guides operational to strategic business decisions in the context of real-world applications.\
             Data analytics techniques are used to derive insight using statistical software.",
        level: 3,
        imageSrc: 'images/courses/bi.jpg',
    },
    {
        code: "WKT8001",
        name: "Work Term I",
        description: "Students complete a cooperative work term, and submit a written report which documents \
        the location of employment and the duties performed.",
        level: 'Coop',
        imageSrc: 'images/courses/wt.jpg',
    },
    {
        code: "WKT8002",
        name: "Work Term II",
        description: "Students complete a cooperative work term, and submit a written report which documents\
         the location of employment and the duties performed.",
        level: 'Coop',
        imageSrc: 'images/courses/wt2.jpg',
    },
    {
        code: "CST8276",
        name: "Advanced Database Topics",
        description: "Teams and individuals explore advanced database topics: database administration (using Oracle),\
         data governance, globalization, security and advances in database technology. Topic coverage \
         includes business intelligence, data warehouses, data visualization, big data, NoSQL and graph \
         databases. Database administration tasks requiring knowledge of database architecture are examined:\
          relational vs. non-relational models, security, performance, database distribution, database sharing,\
           backup and recovery. ",
        level: 4,
        imageSrc: 'images/courses/data2.jpg',
    },
    {
        code: "CST8277",
        name: "Enterprise Application Programming",
        description: "With a focus on the IT Enterprise, students are introduced to the application \
        enterprise environment using and extending the technologies learned in previous courses. Topics \
        studied may include the Java enterprise environment (JEE), the Microsoft .NET environment, Enterprise\
         Android programming, cloud computing, security and the corporate database repository.",
        level: 4,
        imageSrc: 'images/courses/enterprise.jpg',
    },
    {
        code: "CST8333",
        name: "Programming Language Research Project",
        description: "Learning a new programming language or framework on your own is a challenge \
        faced by programmers on the job as part of their career. Students explore this process of \
        self-study by applying project planning, applied research, testing, and implementation of \
        basic and advanced concepts appropriate to the language or framework under study. Students \
        develop major milestones and deliverables culminating in a project and reflective summary submission.",
        level: 4,
        imageSrc: 'images/courses/research.jpg',
    },
    {
        code: "CST8334",
        name: "Software Development Project",
        description: "Following the agile software engineering methodology, teams work with clients\
         to analyze business needs, determine computer system requirements, model system designs, \
         build prototypes, test code and deliver final products. In some cases, the industry contacts\
          are supplied through the Algonquin College office of Applied Research and Innovation. Project \
          management techniques are used to monitor progress and organize tasks. Outside of in-class \
          requirements, teams must participate in interviews, technical reviews, presentations and the\
           preparation of technical reports. The culmination of the course is a final presentation and \
           technical review, followed by the delivery of the finished product. ",
        level: 4,
        imageSrc: 'images/courses/sdp.jpg',
    },
    {
        code: "GED0336",
        name: "General Education Elective",
        description: "Students choose one course, from a group of general education electives, \
        which meets one of the following four requirements: Arts in Society, Civic Life, Social and\
         Cultural Understanding, and Science and Technology.",
        level: 4,
        imageSrc: 'images/courses/ge.jpg',
    }];


    /**
     * Main program 
     */
     
    //the start point of the program, when the page loades, this function will be called
     renderCourses(courses)



/*
// sample template

<div class="card">
        <img src="images\course-image.png" alt='image' >
        <div>
            <h4>Computer Essentials</h4>
            <h5> Code : CST8101 - <span>level-1</span></h5>
            <p>
                Following the agile software engineering methodology, 
                teams work with clients to analyze business needs, 
                determine computer system requireme.
            </p>
        </div>
</div> 
*/

// a function to create the sample template using 'innerHTML'

function renderCourses(courses) {
    var courseContainerDiv = document.getElementById('course-container');
    var html = '';

    for (var i = 0; i < courses.length; i++) {
        html += '<div class="card"><img src=' + courses[i].imageSrc +
            ' alt=' + 'courseImage' + '><div><h4>' + courses[i].name +
            '</h4><h5>' + courses[i].code + '<span>' + '- Level ' + courses[i].level +
            '</span></h5><p>' + courses[i].description + '</p></div></div>';
    }

    courseContainerDiv.innerHTML = html;
}

/**
 * when level drop-down changes this function will be called.
 *  this function will be triggered by onchange event.
 * when zero is selected all courses will be rendered by  this function 'renderCourses(courses)'
 * else if other options are selected the courses array will be filtered and 'renderCourses(filteredCourses)'
 * will be called.
 */

function filterBy() {
    var filterBy = document.getElementById('selectLevel')

    if (filterBy.value == 0) {
        renderCourses(courses);
    } else {
        var filteredCourses = courses.filter(function (item) {
            return filterBy.value == item.level;
        })
        renderCourses(filteredCourses);
    }    
}

/**
 * This function will filter courses by the value of input with id search.
 * and check if course name includes search value 
 * if true returns array of that courses else return empty array.
 * at the end we call 'renderCourses(filteredCourses)'
 */
function searchBy() {
    var inputSearchValue = document.getElementById('search').value;

    var filteredCourses = courses.filter(function (item) {
        return item.name.toLowerCase().includes(inputSearchValue.toLowerCase())
    })

    renderCourses(filteredCourses)
}

/**
 * This function will sort item based on selected value getting from selectOrder dropdown
 * if value is equal 'lth' (low to high) sort from low to high else sort from high to low
 * then render 'renderCourses(sortedList)'
 */

function sortBy() {
    const selectedOrder = document.getElementById('selectOrder').value 

    const sortedList = courses.sort(function(a, b){
        if (selectedOrder === 'lth'){      // lth (low to high) or htl (high to low)
           return a.level - b.level
        }

        return b.level - a.level
    })

    renderCourses(sortedList)
}