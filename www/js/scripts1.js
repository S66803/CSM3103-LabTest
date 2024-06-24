$(document).ready(function() {
    const urlParams = new URLSearchParams(window.location.search);
    const employeeNumber = urlParams.get('id');

    if (employeeNumber) {
        $.ajax({
            url: `https://kerbau.odaje.biz/getstaffbyid.php?id=${employeeNumber}`,
            method: 'GET',
            dataType: 'json',
            success: function(data) {
                if (data[0] && JSON.parse(data[0]).status === 1) {
                    const staffDetails = JSON.parse(data[1]);
                    const detailsHtml = `
                        <h2>Staff Details</h2>
                        <p><strong>Employee Number:</strong> ${staffDetails.employeeNumber}</p>
                        <p><strong>First Name:</strong> ${staffDetails.firstName}</p>
                        <p><strong>Last Name:</strong> ${staffDetails.lastName}</p>
                        <p><strong>Office Code:</strong> ${staffDetails.officeCode}</p>
                        <p><strong>Extension:</strong> ${staffDetails.extension}</p>
                        <p><strong>Email:</strong> ${staffDetails.email}</p>
                        <p><strong>Job Title:</strong> ${staffDetails.jobTitle}</p>
                        <p><strong>Reports To:</strong> ${staffDetails.reportsTo || "N/A"}</p>
                    `;
                    $("#staffDetails .card-body").html(detailsHtml);
                } else {
                    $('#staffDetails .card-body').html('<p class="text-danger">No data found for this employee.</p>');
                }
            },
            error: function(error) {
                console.log("Error fetching staff details:", error);
            }
        });
    }
});