


document.addEventListener("DOMContentLoaded", function () {
    const randomizeButton = document.getElementById("randomizeButton");
    const randomStudentName = document.getElementById("randomStudentName");
    const studentList = document.getElementById("studentList");
    const loadingIcon = document.getElementById("loadingIcon");

    let students = [
        { name: 'Enoka' },
        { name: 'Jake' },
        { name: 'Aidan' },
        { name: 'Tytan' },
        { name: 'Isaac' },
        { name: 'Leland' },
        { name: 'Sisko' },
        { name: 'Dax' },
        { name: 'Worf' },
        { name: 'Odo' },
        { name: 'Kira Nerys' },
        { name: 'Quark' },
        { name: "O'Brian" }
    ];

    function displayStudents(students) {
        studentList.innerHTML = '';  
        students.forEach(student => {
            const listItem = document.createElement('li');
            listItem.textContent = formatName(student.name);
            studentList.appendChild(listItem);
        });
    }

    function formatName(name) {
        const nameParts = name.split(' ');
        return nameParts.map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function randomizeStudent() {
        const randomDuration = Math.random() * (5000 - 3000) + 3000; 
        let counter = 0;
        
        loadingIcon.style.display = 'block';

        const shuffleInterval = setInterval(() => {
            students = shuffleArray(students); 
            displayStudents(students); 
            counter += 300;

            if (counter >= randomDuration) {
                clearInterval(shuffleInterval); 
                const randomIndex = Math.floor(Math.random() * students.length);
                const randomStudent = students[randomIndex];
                randomStudentName.textContent = `Selected: ${formatName(randomStudent.name)}`;
                loadingIcon.style.display = 'none';
                randomizeButton.disabled = false; 
            }
        }, 300); 
    }

    randomizeButton.addEventListener("click", function () {
        randomizeButton.disabled = true; 
        randomizeStudent();
    });

    displayStudents(students);
});
