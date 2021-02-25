const wiki_data = [
    {
    	address:"html/app.html",
        title:"How to Download the App",
        image_location:"img/download.jpg",
        step:[
        		{
	        		text:`You can download Leantech on any Android or IOS device. The app can be
                            found at the Google play store or IOS App store.` ,
	        		gif:"gif/app.gif",
        		},
        ],
    },
    {
    	address:"html/sign-up.html",
        title:"How to Sign Up",
        image_location:"img/use-phone.jpg",
        step:[
        		{
	        		text:`Start by opening the app and tapping the Sign Up button`,
	        		gif:"gif/signing_up_1.gif",
        		},
        		{
	        		text:`Then enter your details, noting that the first name and email fields are mandatory.`,
	        		gif:"gif/signing_up_2.gif",
        		},
        		{
	        		text:`Then, hit the sign up button to sign up.`,
	        		gif:"gif/signing_up_3.gif",
        		},
        		{
	        		text:`In the inbox of the email address you provided, you\’ll find an email asking you to confirm your address. Click the confirmation link to register your account and start using the app.`,
        		},
        ],
    },
    {
    	address:"html/item.html",
        title:"How to Add an Item of Equipment",
        image_location:"img/drill.jpg",
        step:[
        		{
	        		text:`Start by navigating to the 'Items' tab in the app.`,
	        		gif:"gif/additem1.gif",
        		},
        		{
	        		text:`Then hit the green plus button to start creating an item. This is where you can 'log'
                    an item that has been hired and is on a work site in the system, so that you can make sure
                    that you don't waste time and resources on a hired piece of kit that no one knows has been hired
                    and is on site.`,
	        		gif:"gif/additem2.gif",
        		},
        		{
	        		text:`Congratulations on registering an item. You are now on track to an efficient and controlled site inventory management system!`,
	        		
        		},
        ],
    },
    {
    	address:"html/site.html",
        title:"How to Add or Modify a Site",
        image_location:"img/site.jpg",
        step:[
        		{
	        		text:`Sites are work sites – places where construction is occurring. 
                            Each site is a different location where equipment is hired. Adding sites 
                            is essential to make sure you understand where exactly your equipment is. 
                            To add or modify sites, you start by logging into the app, then navigating 
                            to the Account tab.`,
                    gif:`gif/site_1.gif`,
        		},
        		{
	        		text:`Click the Sites button, and then click the big green plus to add a site.`,
                    gif:`gif/site_2.gif`,
	        
        		},
        		{
	        		text:`Enter the name of the site and other details as you desire then hit save.`,
                    gif:`gif/site_3.gif`,
	        	
        		},
        		{
	        		text:`To modify a site, navigate to the same place (Account/Sites) 
                    then click the name of the site you wish to modify and make changes as needed. 
                    You may delete the site by pressing the trash can.`,
	        		gif:`gif/site_4.gif`,
        		},
        ],
    },
    {
    	address:"html/password.html",
        title:"How to Change my Password",
        image_location:"img/password.jpg",
        step:[
        		{
	        		text:`If you are not logged in click the forgot password button, 
                            then enter your email address and click the send button. 
                             Then check your inbox, and follow the prompts in the email your receive.`,
                    gif:`gif/forgot_3.gif`
	       
        		},
        		{
	        		text:`If you are logged in, first navigate to the Account tab.`,
                    gif:`gif/site_1.gif`
	        
        		},
        		{
	        		text:`Then click the Change Password button and enter your current password and your desired password. 
                    Click Save to save your changes.`,
                    gif:`gif/forgot_1.gif`,
	        
        		},
        ],
    },
    {
    	address:"html/details.html",
        title:"How to Edit my Details",
        image_location:"img/edit.jpg",
        step:[
        		{
	        		text:`The details of your profile are used to log into your account 
                    and to automatically generate emails requesting equipment for hire. 
                    To modify these, start by logging into the app, then navigating to the Account tab.`,
                    gif:`gif/site_1.gif`,
        		},
        		{
	        		text:`Then click the edit profile button, and enter any changes you wish to make to your account. 
                    You can change your name, email, company or project here.`,
        		},
        		
        ],
    },
    {
        address:"html/list.html",
        title:"How to Make a List",
        image_location:"img/list.jpg",
        step:[
                {
                    text:`A list is where you can group items of equipment for easier inventory management. 
                    That is it is a way of organising your equipment items already in the app. 
                    Start by logging into the app, then navigate to the List tab. 
                    Then click the green plus button to add a list.`,
                },
                {
                    text:`Enter the name you wish to call the list and hit the Create button.`,
                },
                {
                    text:`Your list has now been created and you can 
                    start adding items that you’ve already created. 
                    Navigate to the Items tab and press and hold the first item 
                    you wish to add until the app switches to select mode.`,
                },
                {
                    text:`Once the first item has been selected and the app is in select mode, 
                    you can now bulk select the remaining desired items by tapping each. 
                    Select all the items you wish to add.`,
                },
                {
                    text:`Then, hit the add list button and select the list you wish your selected items to be added to.`,
                },
        ],
    },
    {
        address:"html/filterlist.html",
        title:"How to Filter a List",
        image_location:"img/filter.jpg",
        step:[
                {
                    text:`You can sort a list to help you quickly find items within a list you’ve already made. 
                    Start by logging in and navigating to the List tab.`,
                },
                {
                    text:`Click the list you wish to sort to access it, 
                    then click then AZ filter button to see possible sorts.`,
                },
                {
                    text:`You can click the Title button to sort items alphabetically, 
                    click the Hire date to sort items by date of hire, 
                    and click Status to sort items by where they are in the hire lifecycle.`,
                },
        ],
    },
    {
        address:"html/share.html",
        title:"How to Share a List",
        image_location:"img/together.jpeg",
        step:[
                {
                    text:`TBC`,
                },
        ],
    },
    {
        address:"html/market.html",
        title:"How to Add a Marketplace Item",
        image_location:"img/market.jpeg",
        step:[
                {
                    text:`The Market is a place where you can easily view a catalogue of equipment that is
                    available to be hired currently. You can view these items of equipment and easily add 
                    items from the market catalogue to your managed items.
                    Start by logging in and navigating to the Market tab.`,
                },
                {
                    text:`Then, navigate to specific categories of items by selecting the category(s) of
                    the item you wish to browse.`,
                },
                {
                    text:`Once you are in the correct category, you can browse items available for hire.
                    You can sort these by pressing the AZ filter button then 
                    sorting alphabetically, by price, or by delivery fee.`,
                },
                {
                    text:`Once you've found the desired item, click see more to view its details.`,
                },
                {
                    text:`To add it to your saved items, click the save item button, and then click the copy button.`,
                },
                {
                    text:`Add changes as necessary then click the Save button to add the new item to your saved items..`,
                },

        ],
    },
    {
        address:"html/email.html",
        title:"How to Send an Autogenerated Email Template",
        image_location:"img/email.jpg",
        step:[
                {
                    text:`Start by logging into the app, and navigating to the Items tab to see your current items.`,
                },
                {
                    text:`Tap the item you want to hire and then tap the email item under the Supplier email field.`,
                },
                {
                    text:`Pick an email template to be generated, and the app will open your default email app.
                     The email will automatically be filled with the correct fields ready to go.`,
                },
                {
                    text:`Edit as much as you wish, or not at all, then hit send to execute the request.
                    Congratulations on saving time and energy and getting your hire request out!`,
                },
        ],
    },
    {
        address:"html/template.html",
        title:"How to Edit an Autogenerated Email Template",
        image_location:"img/canvas.jpeg",
        step:[
                {
                    text:`Email templates are a way of easily automating the process of communicating with suppliers.
                    To start making or editing an email, log into the app, then navigate to the Account tab.`,
                },
                {
                    text:`Click the Email templates button then tap the green plus button to add an email template.`,
                },
                {
                    text:`The Template Name is what the app will display to you. 
                    The Subject is the subject of the email, and the Body the body of the email. 
                    Enter your desired message then add custom fields if you wish.`,
                },
                 {
                    text:`You can see custom fields below in the options tab. 
                    To insert a custom field type the option as it appears exactly, 
                    making sure to add two curly braces on both sides. 
                    When you use this template, each custom field will automatically be 
                    filled in for you based on the item and conditions. 
                    For example, 'Could I please pick up at the {{branch}} branch?' will automatically
                     turn into 'Could I please pick up at the Southmore branch?' if the 
                     item is attached to the Southmore branch.`,
                },
        ],
    },
   
];