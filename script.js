
$(document).ready(function () {

    $("#loadApiProduct").on("click", function () {

        $("#apiStatus")
            .text("Loading product information...")
            .css("color", "#2563eb");

        $.ajax({
            url: "https://dummyjson.com/products/1",
            method: "GET",
            dataType: "json",

            success: function (product) {
                $("#apiProductName").text(product.title);
                $("#apiProductPrice").text(
                    "Price: $" + product.price
                );
                $("#apiProductCategory").text(
                    "Category: " + product.category
                );
                $("#apiProductDescription").text(
                    product.description
                );

                $("#apiProductImage")
                    .attr("src", product.thumbnail)
                    .attr("alt", product.title)
                    .prop("hidden", false);

                $("#apiStatus")
                    .text("Product loaded successfully!")
                    .css("color", "green");

                console.log("API JSON response:", product);
            },

            error: function (xhr, status, error) {
                $("#apiStatus")
                    .text(
                        "Unable to load the product. Please try again."
                    )
                    .css("color", "red");

                console.error(
                    "API request failed:",
                    status,
                    error
                );
            }
        });
    });

});
