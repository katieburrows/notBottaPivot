//This is my "database" that I've turned into an array of objects with all the information about 16 products.
var data = [
    {
        name: "Crystal Light Liquid",
        description: "3-pack of 1.62 fl oz. bottles. Offer only redeemable at Sam's Club",
        terms: "Offer valid on Crystal Light Liquid in 3-pack of 1.62 fl oz. bottles. Offer only redeemable at Sam's Club.",
        image: "http://s3.amazonaws.com/ibotta-product/offer/Fs9JO4bjT5Kakh920d4WEw-large.png",
        expiration: "2016-04-03 06:59:00 UTC"
    },
    {
        name: "Crystal Light",
        description: "Any variety -  32 quart package Offer only redeemable at Sam's Club",
        terms: "Offer valid on Crystal Light, for any variety, in 32 quart package. Offer only redeemable at Sam's Club.",
        image: "http://s3.amazonaws.com/ibotta-product/offer/D7lbegjPt6uQPT_TKnVkdA-large.png",
        expiration: "2016-04-03 06:59:00 UTC"
    },
    {
        name: "Fruttare® Frozen Fruit Bars",
        description: "Any Variety - 4 ct. or larger. Offer only redeemable at Target",
        terms: "Offer valid on Fruttare® Frozen Fruit Bars for any variety, 4 ct or larger box. Offer only redeemable at Target.",
        image: "http://s3.amazonaws.com/ibotta-product/offer/4LJQ-ucFW0PTe_f8gMaLEg-large.png",
        expiration: "2016-02-07 06:59:00 UTC"
    },
    {
        name: "Enjoy Life®",
        description: "Any variety - 6 oz. box",
        terms: "Offer valid on Enjoy Life® Soft Baked Cookies for any variety.  Offer excludes Enjoy Life® Crunchy Cookies.",
        image: "http://s3.amazonaws.com/ibotta-product/offer/NwS_hbMv0prqAraK_zK-Vw-large.png",
        expiration: "2016-03-27 06:59:00 UTC"
    },
    {
        name: "Enjoy Life® Plentils",
        description: "Any variety - 4 oz. bag only. Offer only redeemable at Target",
        terms: "Offer valid on Enjoy Life® Plentils for any variety, in 4oz. bag only.  Offer excludes Enjoy Life® Grab & Go Packs. Offer only redeemable at Target.",
        image: "http://s3.amazonaws.com/ibotta-product/offer/vNmpIEhE54uWvHy7keUbTw-large.png",
        expiration: "2016-03-27 06:59:00 UTC"

    },
    {
        name: "Enjoy Life®",
        description: "Mountain Mambo Seed & Fruit Mix variety only",
        terms: "Offer valid on Enjoy Life® Mountain Mambo Seed & Fruit Mix variety only. Offer excludes Enjoy Life® Beach Bash Seed & Fruit Mix variety and any Grab & Go Packs.",
        image: "http://s3.amazonaws.com/ibotta-product/offer/5cdJiTJasOrEjIKnfElt5w-large.png",
        expiration: "2016-03-27 06:59:00 UTC"
    },
    {
        name: "Healthy Choice® Baked Entrees",
        description: "Any variety - Any size. Offer only redeemable at Target",
        terms: "Offer valid on Healthy Choice® Baked Entrees for any variety, in any size. Offer excludes any other variety of Healthy Choice® frozen meals. Offer only redeemable at Target.",
        image: "http://s3.amazonaws.com/ibotta-product/offer/cj_yZo-7-5y6SxprUceQQA-large.png",
        expiration: "2016-03-07 06:59:00 UTC"
    },
    {
        name: "Healthy Choice® 100% Natural Café Steamers",
        description: "Any variety - Any size. Offer only redeemable at Target",
        terms: "Offer valid on Healthy Choice® 100% Natural Café Steamers for any variety, in any size. Offer excludes any other variety of Healthy Choice® frozen meals. Offer only redeemable at Target.",
        image: "http://s3.amazonaws.com/ibotta-product/offer/9Cy70KDQ85x6TspJ0pVtcw-large.png",
        expiration: "2016-03-07 06:59:00 UTC"
    },
    {
        name: "Little Duck Organics",
        description: "Tiny Fruits - Any variety",
        terms: "Offer valid on Little Duck Organics Tiny Fruits for any variety.",
        image: "http://s3.amazonaws.com/ibotta-product/offer/-JAwDs62iJbDvYDb5ZITiw-large.png",
        expiration: "2016-03-25 06:59:00 UTC"
    },
    {
        name: "Organic Peace Cereal®",
        description: "Any Organic Variety - 11 oz. or Larger. Offer only redeemable at Whole Foods",
        terms: "Offer valid on Organic Peace Cereal®  for any organic variety, in any 11 oz. or larger. Offer only redeemable at Whole Foods.",
        image: "http://s3.amazonaws.com/ibotta-product/offer/oq3cCAbBocK52uwaWPiv8g-large.png",
        expiration: "2016-04-03 06:59:00 UTC"
    },
    {
        name: "Willamette Valley Granola brand Granola Chips",
        description: "Any variety - 6.2 oz. or Larger",
        terms: "Offer valid on Willamette Valley Granola brand Granola Chips for any variety, in any 6.2 oz. or larger.",
        image: "http://s3.amazonaws.com/ibotta-product/offer/pgu8Do4h9Ix5ZupyU-ss5w-large.png",
        expiration: "2016-04-03 06:59:00 UTC"
    },
    {
        name: "JUST CHILL®",
        description: "Relaxation Drink. Any variety - Any 12 oz. can",
        terms: "Offer valid on JUST CHILL® Relaxation Drink for any variety, in any 12 oz. can. Offer only redeemable at Vons.",
        image: "http://s3.amazonaws.com/ibotta-product/offer/iKDE_ET_8EZ44FiGzn326A-large.png",
        expiration: "2016-02-21 06:59:00 UTC"
    },
    {
        name: "Ian's® Fish Sticks",
        description: "Any variety – Family Packs only. Offer only redeemable at Whole Foods",
        terms: "Offer valid on Ian's® Fish Sticks for any variety, in Family Packs only. Offer only redeemable at Whole Foods.",
        image: "http://s3.amazonaws.com/ibotta-product/offer/5Mt1F9NFfwImRkAl85qZfQ-large.png",
        expiration: "2016-02-18 06:59:00 UTC"
    },
    {
        name: "Pyrex® Glassware Products",
        description: "Any variety - Any size",
        terms: "Offer valid on Pyrex® products for any variety, in any size.",
        image: "http://s3.amazonaws.com/ibotta-product/offer/Jg6zmt7mPHlcKXCYyvKGHw-large.png",
        expiration: "2016-02-13 06:59:00 UTC"
    },
    {
        name: "DRY® Soda",
        description: "Any flavor - Any 12 oz. can. Offer only redeemable at Kroger",
        terms: "Offer valid on DRY® Soda for any flavor, in any 12 oz. can. Offer only redeemable at Kroger.",
        image: "http://s3.amazonaws.com/ibotta-product/offer/MNRXg62xRJDiF29PT3Q-iQ-large.png",
        expiration: "2016-04-03 06:59:00 UTC"
    },
    {
        name: "Corelle® Dinnerware Set",
        description: "Any variety - 16 piece set",
        terms: "Offer valid on Corelle® Dinnerware Set for any variety, in 16 piece set",
        image: "http://s3.amazonaws.com/ibotta-product/offer/3W5QuGzFWZq6e07FwHtdPA-large.png",
        expiration: "2016-02-07 06:59:00 UTC"
    }
];

//A for loop to go through the database array and spit the 16 images onto the page.
for (var i = 0; i < data.length; i++) {
    var name = data[i].name;
    var image = data[i].image;

    //Creating an image element and adding the Bootstrap class of "col-md-2" to get that styling on each element being created.  I'm also setting src equal to the image's URL.  I chose to set the id of each image as it's URL so that I can easily hook onto that unique information to use in the modal.  
    var image = $("<img>").attr({
        "class": "col-md-2",
        "src": image,
        "id": image,
        "height": 175
    })

    $(".gallery").append(image);
}

//The function that shows the modal once an image is clicked on.
$(document).ready(function () {
    $("img").click(function () {

        //As mentioned on line 123 I used the image's URL as it's id, here I'm grabbing the URL and putting it into a variable.
        var imgURL = $(this).attr("id");

        //Another for loop that goes through the "database" array and compares the id from the image that was clicked on with the data.  If there's a match then the data pertaining to that index is accessed with dot notation and prepared to be put into the modal.
        for (var i = 0; i < data.length; i++) {
            if (imgURL === data[i].image) {
                $("#productName").text(data[i].name);

                //I'm clearing out the div that holds the images in the modal so that extra unrelated images aren't appended to the div.
                $("#imgDiv").empty();
                $("#imgDiv").append($("<img>", { "src": data[i].image, "height": 200, "width": 200 }));
                $("#description").append(data[i].description);
                $("#terms").append(data[i].terms);
                $("#expiration").append(data[i].expiration);
            }
        }
        //The code that kicks off the modal.
        $("#myModal").modal("show");
    });
});

//An alert will pop up when the search box is clicked on to notify the user that it isn't wired up.
$(".form-control").on("click", function () {
    alert(`Nice to have functionality--this doesn't have it yet!`);
});
