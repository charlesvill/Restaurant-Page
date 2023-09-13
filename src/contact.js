export default function createContact(){

    const visualContainer = document.querySelector(".visualContainer");
    //include a header: interested in having Tacos El Guapo catered to your next event?
    const card = document.createElement('div');
    card.className = "card";
    visualContainer.appendChild(card);

    card.innerHTML = 
    `
    <h2>Interested in Tacos El Guapo catering for your next event?</h2>
    
    <form class="form">
        <fieldset class="contactDetails">
        <legend>Contact Details</legend>
            <div class="solicitor sName">    
                <div class="formrow">
                    <label for="fname">First Name</label>
                    <input type="text" name="fName" id="name" required>
                </div>
                <div class="formrow">
                    <label for="lname">Last Name</label>
                    <input type="text" name="lName" id="lname">
                </div>
            </div>
            <div class="solicitor CInfo">
                <label for="email">Email</label>
                <input type="email" name="email" id="email"required>
                <label for="phonenum">Phone Number</label>
                <input type="number" name="phone" id="phonenum" minlength="10" maxlength="13" required>
            </div>
            <div class="commentBox">
                <label for="message">Comments</label>
                <textarea name="msg" id="message" cols="50" rows="10"></textarea>
            </div>
        </fieldset>

        <fieldset>
            <legend>Event info</legend>
            <label for="eventSize">Group Size</label>
            <select name="sizeDropdown" id="eventSize">
                <option selected>None</option>
                <option>20-30</option>
                <option>30-50</option>
                <option>50-70</option>
            </select>
            <label for="date">Event Date</label>
            <input type="datetime-local" name="date" id="date">
        </fieldset>
        <button type="submit">Submit</button>
    </form>
    `

    //use a form to collect data for the catering



}