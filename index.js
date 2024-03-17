const express = require("express");
const puppeter = require("puppeteer");

const app = express();
const port = 3000;

app.use(express.json());

app.post("/generate-pdf", async (req, res) => {
  try {
    const browser = await puppeter.launch({ headless: "new" });
    const page = await browser.newPage();

    const userBooking = {
      roomsList: [
        {
          room_Id: "6a934a337509",
          room_Name: "Economy Double Room",
          room_Info: "1 Double Bed",
          plan_Id: "bb32f20a4105",
          plan_Name: "EP Plan",
          plan_Info: "Room Only",
          room_Guest_Occupancy: 2,
          room_Guest_Extra_Count: 0,
          room_Guest_Price: 1200,
          room_Min_Guest_Occupancy: 1,
          room_Max_Guest_Occupancy: 3,
          room_Children_Occupancy: 0,
          room_Children_Price: 1000,
          room_Min_Children_Occupancy: 0,
          room_Max_Children_Occupancy: 2,
          plan_Start_Date: "2024-02-16T18:30:00.000Z",
          plan_End_Date: "2024-02-17T18:30:00.000Z",
          plan_Room_Price: 1772,
          plan_Tax: 213,
          plan_Price: 1985,
          plan_Adult_Price: 0,
          plan_Child_Price: 0,
          priceBreakUp: [
            {
              date: "2024-02-16T18:30:00.000Z",
              basePrice: 1772,
              adultPrice: 1200,
              childPrice: 1000,
              taxPrice: 213,
              totalPrice: 1985,
            },
          ],
          total_Room_Plan_Price: 1772,
          total_Plan_Tax: 213,
          total_Plan_Price: 1985,
          total_Adult_Price: 0,
          total_Child_Price: 0,
          total_Price: 0,
          room_Count: 1,
          num_Guests: 2,
          num_Children: 0,
        },
      ],
      hotel_Owner_Id: "4vFGYN3yszOzrzbWVL9UozrUlMy1",
      hotel_Image_Url:
        "https://images.staybook.in/Staybook-Hotel-Jai-Balaji-New-Delhi-Railway-Station/StaybookJaibalaji_reception_1.jpg",
      hotel_Slug_Name:
        "staybook-hotel-jai-balaji-new-delhi-railway-station-new-delhi",
      hotel_Name: "Staybook Hotel Jai Balaji New Delhi Railway Station",
      hotel_Email_Id: "jaibalajiguesthouse@gmail.com",
      hotel_Landmark:
        "9918, Street No. 5, Multani Dhanda, Paharganj, Delhi, 110055",
      hotel_Firebase_Id: "IU9PgpwPMC8vGjF9A2FC",
      hotel_Map_Url: "https://maps.app.goo.gl/L5NS9Z6xgkvbH7sw9",
      hotel_Star_Rating: 3,
      user_Name: "mohit developer",
      user_First_Name: "mohit",
      user_Last_Name: "developer",
      user_Email_Id: "mk.mohit2440@gmail.com",
      user_Phone_Number: "910000000000",
      user_Instructions: "",
      total_Rooms_Count: 1,
      total_Guests_Count: 2,
      total_Children_Count: 0,
      checkin_Time: "2024-02-16T18:30:00.000Z",
      checkout_Time: "2024-02-17T18:30:00.000Z",
      num_nights: 1,
      total_Room_Cost: 1772,
      total_Tax: 213,
      total_Price: 1985,
      booking_Time: "2024-02-17T10:15:21.222Z",
      user_Address: "",
      user_Pincode: "",
      user_State: "",
      paying_Amount: 2045,
      user_Request: "",
      booking_Id: "",
      user_Unique_Id: "",
      user_Staybook_Coins: 0,
      payment_Made: false,
      amount_Paid: 0,
      razorpay_Payment_Id: "",
      razorpay_Order_Id: "",
      razorpay_Signature_Id: "",
      receipt_Id: "7iw0iWCYR",
      booking_Cancelled_Status: false,
      booking_Checkin_Status: false,
      booking_Coins: 0,
      booking_Noshow_Status: false,
      booking_Status: true,
    };

    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="viewport" content="width=device-width" />
          <title>Email template</title>
        </head>

        <body>
          <div
            id="email"
            style="
              width: 640px;
              margin: auto;
              background: #005250;
              font-family: sans-serif;
            "
          >
            <!-- Header -->
            <table
              role="presentation"
              border="0"
              width="100%"
              cellspacing="0"
              cellpadding="16"
              style="padding: 16px"
            >
              <tr>
                <td align="center">
                  <img
                    alt="brand_logo"
                    src="https://res.cloudinary.com/du2tgu54d/image/upload/v1697017137/logo_guukcs.png"
                    width="100px"
                  />
                </td>
                <td style="color: white">
                  <p>Thank you for booking with us...</p>
                  <p style="font-size: 20px; font-weight: bold">
                    Your booking at Staybook - ${userBooking.hotel_Name} is
                    confirmed
                  </p>
                </td>
              </tr>
            </table>

            <!-- Simple details -->
            <table
              role="presentation"
              border="0"
              width="100%"
              cellspacing="0"
              style="padding: 16px"
            >
              <tr>
                <td bgcolor="#ffffff" style="padding: 16px; border-radius: 10px">
                  <p style="font-size: 16px">
                    &#9864;
                    <b>${userBooking.hotel_Name}</b> is expecting you on
                    ${checkInDate}, 12:00 PM onwards. for
                    ${userBooking.total_Guests_Count} guest(s) is confirmed. You
                    have reserved ${userBooking.total_Rooms_Count} room(s) for
                    ${userBooking.num_nights} night(s).
                  </p>

                  <p style="font-size: 16px">
                    &#9864; ${bookingMessage}
                  </p>
                </td>
              </tr>
            </table>

            <!-- hotel name and rating -->
            <table
              role="presentation"
              border="0"
              width="100%"
              cellspacing="0"
              cellpadding="16"
              style="padding: 0 16px"
            >
              <tr>
                <td
                  bgcolor="#ffffff"
                  width="100%"
                  style="padding: 16px; border-radius: 10px 10px 0 0"
                >
                  <h2 style="font-size: 20px; margin: 0">
                    Staybook - ${userBooking.hotel_Name}
                  </h2>
                  <p
                    style="
                      font-family: sans-serif;
                      font-size: 16px;
                      margin: 7px 0 0 0;
                    "
                  >
                    ${hotelStars}
                  </p>
                </td>
              </tr>
            </table>

            <!-- flex section with hotel details -->
            <table
              role="presentation"
              border="0"
              width="100%"
              cellspacing="0"
              cellpadding="16"
              style="padding: 0 16px"
            >
              <tr>
                <td
                  bgcolor="#ffffff"
                  width="60%"
                  style="
                    vertical-align: top;
                    padding: 16px;
                    border-radius: 0 0 0 10px;
                  "
                >
                  <p style="margin: 0">&#9864; ${userBooking.hotel_Landmark}</p>
                  <p>
                    &#9864;
                    <a
                      color="#000000"
                      style="text-decoration: none"
                      href="tel:+919910613040"
                      >9910613040</a
                    >
                  </p>
                  <p>
                    &#9864;
                    <a style="color: #000000" href="mailto:staybookbooking@gmail.com"
                      >booking@staybook.in</a
                    >
                  </p>

                  <br />
                  <strong>Please Note</strong>
                  <p style="font-size: 0.875rem">
                    &#9864; For early check-in and extra bed please contact
                    the hotel directly.
                  </p>
                </td>

                <td bgcolor="#ffffff" style="border-radius: 0 0 10px 0">
                  <a
                    target="_blank"
                    style="
                      display: grid;
                      place-items: center;
                      position: relative;
                      width: 100%;
                      height: 180px;
                      overflow: hidden;
                    "
                  >
                    <img
                      class="hotel_image"
                      style="position: absolute"
                      src="${userBooking.hotel_Image_Url}"
                      width="100%"
                    />
                  </a>
                  <a
                    href="${userBooking.hotel_Map_Url}"
                    target="_blank"
                    align="center"
                    style="
                      display: block;
                      background-color: #005250;
                      padding: 12px;
                      font-size: 18px;
                      color: #ffffff;
                      margin-top: 16px;
                      border-radius: 5px;
                    "
                  >
                    View on Map
                  </a>
                </td>
              </tr>
            </table>

            <!-- Booking heading -->
            <table
              role="presentation"
              border="0"
              width="100%"
              cellspacing="0"
              cellpadding="16"
              style="padding: 16px 16px 0 16px"
            >
              <tr>
                <td
                  bgcolor="#ffffff"
                  width="100%"
                  style="padding: 16px; border-radius: 10px 10px 0 0"
                >
                  <h2 style="font-size: 20px">Booking Details</h2>
                </td>
              </tr>
            </table>

            <!-- flex section about nights details -->
            <table
              role="presentation"
              border="0"
              width="100%"
              cellspacing="0"
              cellpadding="16"
              style="padding: 0 16px"
            >
              <tr>
                <td
                  bgcolor="#ffffff"
                  width="30%"
                  style="vertical-align: top; padding: 16px 0 0 16px"
                >
                  <strong>${userBooking.num_nights} Night(s) Stay</strong>
                </td>

                <td bgcolor="#ffffff" width="35%" style="padding: 16px">
                  <p style="font-size: 13px; margin: 0">Check-in</p>
                  <p style="font-weight: bold; margin: 5px 0 5px 0">
                    ${checkInDate}
                  </p>
                  <p style="font-size: 13px; margin: 0">after 12 PM</p>
                </td>

                <td bgcolor="#ffffff" width="35%" style="padding: 16px">
                  <p style="font-size: 13px; margin: 0">Check-out</p>
                  <p style="font-weight: bold; margin: 5px 0 5px 0">
                    ${checkOutDate}
                  </p>
                  <p style="font-size: 13px; margin: 0">before 11 AM</p>
                </td>
              </tr>
            </table>

            <!-- flex section about rooms details -->
            <table
              role="presentation"
              border="0"
              width="100%"
              cellspacing="0"
              cellpadding="16"
              style="padding: 0 16px"
            >
              <tr>
                <td
                  bgcolor="#ffffff"
                  width="30%"
                  style="vertical-align: top; padding: 16px 0 0 16px"
                >
                  <strong>${userBooking.total_Rooms_Count} Room(s)</strong>
                </td>

                <td bgcolor="#ffffff" width="70%" style="padding: 16px">
                  <p style="font-weight: bold; margin: 5px 0 5px 0">
                    ${roomsInfo}
                  </p>
                  <p style="font-size: 13px; margin: 0">
                    ${userBooking.total_Guests_Count} Adult(s),
                    ${userBooking.total_Children_Count} child(s)
                  </p>
                  <p style="font-size: 13px; margin: 0"></p>
                </td>
              </tr>
            </table>

            <!-- flex section about guest deatails -->
            <table
              role="presentation"
              border="0"
              width="100%"
              cellspacing="0"
              cellpadding="16"
              style="padding: 0 16px"
            >
              <tr>
                <td
                  bgcolor="#ffffff"
                  width="30%"
                  style="
                    vertical-align: top;
                    padding: 16px 0 0 16px;
                    border-radius: 0 0 0 10px;
                  "
                >
                  <strong>${userBooking.total_Guests_Count} Guest(s)</strong>
                </td>

                <td
                  bgcolor="#ffffff"
                  width="70%"
                  style="padding: 16px; border-radius: 0 0 10px 0"
                >
                  <p style="font-size: 13px; margin: 0">
                    ${userBooking.total_Rooms_Count} Room(s) (Primary Guest)
                  </p>
                  <p style="font-weight: bold; margin: 5px 0 5px 0">
                    ${userBooking.user_Name}
                  </p>
                  <p style="font-size: 13px; margin: 0">
                    ${userBooking.user_Email_Id} ,
                    ${userBooking.user_Phone_Number}
                  </p>
                </td>
              </tr>
            </table>

            <!-- Payment heading -->
            <table
              role="presentation"
              border="0"
              width="100%"
              cellspacing="0"
              cellpadding="16"
              style="padding: 16px 16px 0 16px"
            >
              <tr>
                <td
                  bgcolor="#ffffff"
                  width="100%"
                  style="padding: 16px; border-radius: 10px 10px 0 0"
                >
                  <h2 style="font-size: 20px">Payment Details</h2>
                </td>
              </tr>
            </table>

            <!-- flex section about payment details -->
            <table
              role="presentation"
              border="0"
              width="100%"
              cellspacing="0"
              cellpadding="16"
              style="padding: 0 16px"
            >
              <tr>
                <td
                  bgcolor="#ffffff"
                  width="30%"
                  style="
                    vertical-align: top;
                    padding: 16px;
                    border-radius: 0 0 0 10px;
                  "
                >
                  <strong
                    >Price Breakup <br />
                    (in INR)</strong
                  >
                </td>

                <td bgcolor="#ffffff" width="35%" style="padding: 16px">
                  <p style="font-weight: bold; margin: 0">Total room price</p>
                  <p style="font-weight: bold; margin: 24px 0 32px 0">Total tax</p>
                  <p style="font-weight: bold; margin: 0">Total Price (Including Tax)</p>
                  <p style="font-weight: bold; margin: 0">
                  ${
                    paymentMode === "Prepaid Booking" ||
                    (paymentMode === "Partial Payment Done" &&
                      `Total Price Paid`)
                  }
                  </p>
                  <p style="font-weight: bold; margin: 0">
                  ${
                    paymentMode === "Prepaid Booking" ||
                    (paymentMode === "Partial Payment Done" &&
                      `Price Left to Pay`)
                  }
                  </p>
                </td>

                <td
                  bgcolor="#ffffff"
                  width="35%"
                  align="right"
                  style="padding: 16px; border-radius: 0 0 10px 0"
                >
                  <p style="font-weight: bold; margin: 0">
                    &#8377; ${Math.ceil(userBooking.total_Room_Cost)}
                  </p>
                  <p style="font-weight: bold; margin: 24px 0 32px 0">
                    &#8377; ${Math.ceil(userBooking.total_Tax)}
                  </p>
                  <p style="font-weight: bold; margin: 0">
                    &#8377; ${Math.ceil(userBooking.total_Price)}
                  </p>
                  <p style="font-weight: bold; margin: 0">
                    &#8377; ${
                      paymentMode === "Prepaid Booking" ||
                      (paymentMode === "Partial Payment Done" &&
                        `${Math.ceil(userBooking.amount_Paid)}`)
                    }
                  </p>
                  <p style="font-weight: bold; margin: 0">
                    &#8377; ${
                      paymentMode === "Prepaid Booking" ||
                      (paymentMode === "Partial Payment Done" &&
                        `${
                          Math.ceil(userBooking.total_Price) -
                          Math.ceil(userBooking.amount_Paid)
                        }`)
                    }
                  </p>
                </td>
              </tr>
            </table>

            <!-- Hotel policy -->
            <table role="presentation" border="0" width="100%" style="padding: 16px">
              <tr>
                <td
                  bgcolor="#ffffff"
                  align="left"
                  style="padding: 16px; border-radius: 10px"
                >
                  <h2 style="font-size: 28px; margin: 0 0 20px 0; font-family: Arial">
                    Hotel Policies
                  </h2>
                  <p style="font-size: 12px">
                    1. Please Note: You can check in using any government-issued ID
                    (except PAN card) and address proof of any local or outstation
                    address. Do carry your original ID (Photocopy not accepted) for
                    cross-verification. Couples are welcome.
                  </p>
                  <p style="font-size: 12px">
                    2. Early check-in or late check-out is subject to availability and
                    may be chargeable by the hotel directly.
                  </p>
                  <p style="font-size: 12px">
                    3. If cancelled before 7 days: 85% refund, Between 7 days-72 hrs:
                    50% refund, Less than 72hrs, No-Shows or Early Checkout : No
                    refund.
                  </p>
                  <p style="font-size: 12px">
                    4. It is mandatory for guests to present valid photo
                    identification upon check in.
                  </p>
                  <p style="font-size: 12px">
                    5. We reserve the right to cancel or modify reservations where it
                    appears that a customer has engaged in fraudulent or inappropriate
                    activity or under other circumstances where it appears that the
                    reservations contain or resulted from a mistake or error.
                  </p>
                  <p style="font-size: 12px">
                    6. To make modifications or cancellations please Reply to this
                    email.
                  </p>
                  <p style="font-size: 12px">
                    7. Refund shall be initiated within 48 hours of receiving the
                    request and the payment would be credited within 5-7 working days
                    via the same mode as used while making the booking.
                  </p>
                  <p style="font-size: 12px">
                    For more assistance, please visit the Staybook help center
                    <a href="https://staybook.in/contactUs">here</a>
                  </p>
                </td>
              </tr>
            </table>

            <!-- Footer -->
            <table
              role="presentation"
              border="0"
              width="100%"
              cellspacing="0"
              cellpadding="16"
              style="padding: 16px"
            >
              <tr>
                <td align="center" style="padding: 16px">
                  <a
                    href="https://staybook.in"
                    target="_blank"
                    class="display: block"
                  >
                    <img
                      alt="brand_logo"
                      src="https://res.cloudinary.com/du2tgu54d/image/upload/v1697017137/logo_guukcs.png"
                      width="64px"
                    />
                  </a>
                </td>
              </tr>
            </table>
          </div>
        </body>
      </html>`;

    await page.setContent(htmlContent);

    // Generate PDF from HTML content
    const pdf = await page.pdf({
      format: "A4",
      printBackground: true,
    });
    await browser.close();

    // Set response headers for the PDF
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      'attachment; filename="generated_pdf.pdf"'
    );
    res.send(pdf);
  } catch (error) {
    console.error("Error generating PDF:", error);
    res.status(500).send("Error generating PDF");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
