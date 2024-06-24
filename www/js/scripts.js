$(document).ready(function() {
    $.ajax({
        url: 'https://kerbau.odaje.biz/getstaff.php',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            const staffList = $('#staff-list');
            data.forEach(function(item) {
                const staff = JSON.parse(item);
                if (staff.email) {
                    const listItem = `<li class="list-group-item">
                                        <a href="secondpage.html?id=${staff.employeeNumber}" id="${staff.employeeNumber}">${staff.email}</a>
                                      </li>`;
                    staffList.append(listItem);
                }
            });
        },
        error: function(error) {
            console.log("Error fetching staff data:", error);
        }
    });
});