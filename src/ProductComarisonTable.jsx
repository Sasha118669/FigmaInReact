import React from "react";
import "./ProductComarisonTable.css";
import {
  ProductComarisonTableImg,
} from './assest.js';

export default function ProductComarisonTable() {
  return (
    <>
      <table className="ProductComarisonTable">
        <tbody>
            <tr>
        <td>
             <div className="ProductComarisonContainerTitle">
        <h2>Go to Product page for more Products</h2>
        <button>View More</button>
    </div>
        </td>
        <td>
            <img src={ProductComarisonTableImg} alt="" />
        </td>

        <td>
            <img src={ProductComarisonTableImg} alt="" />
        </td>
        <td>
            <div className="ProductComarisonContainerAddProduct">
                <h2>Add A Product</h2>
                <button>Choose a Product</button>
            </div>
        </td>
            </tr>
            <tr>
                <td></td>
                <td>
                    <h2>Asgaard Sofa</h2>
                    <p>Rs. 250,000.00</p>
                    <div className="Rating">
                        <h3>4.7</h3>
                        <p>|</p>
                        <p>204 Review</p>
                    </div>
                    </td>

                <td>
                    <h2>Outdoor Sofa Set</h2>
                    <p>Rs. 224,000.00</p>
                    <div className="Rating">
                        <h3>4.2</h3>
                        <p>|</p>
                        <p>145 Review</p>
                    </div>
                    </td>
            </tr>
            <tr>
                <td className="Space"></td>
            </tr>
          <tr>
            <th className="TableTitle">General</th>
          </tr>
          <tr>
            <th>Sale Package</th>
            <td>1 sectional sofa</td>
            <td>1 Three Seater, 2 Single Seater</td>
          </tr>
          <tr>
            <th>Model Number</th>
            <td>TPCJSLJSEBRP915</td>
            <td>DTUBUERJ-5668</td>
          </tr>
          <tr>
            <th>Secondary Material</th>
            <td>Solid Wood</td>
            <td>Solid Wood</td>
          </tr>
          <tr>
            <th>Configuration</th>
            <td>L-shaped</td>
            <td>L-shaped</td>
          </tr>
          <tr>
            <th>Upholstery Material</th>
            <td>Fabric + Cotton</td>
            <td>Fabric + Cotton</td>
          </tr>
          <tr>
            <th>Upholstery Color</th>
            <td>Bright Grey &amp; Lion</td>
            <td>Bright Grey &amp; Lion</td>
          </tr>

          <tr>
            <th className="TableTitle">Product</th>
          </tr>
          <tr>
            <th>Filling Material</th>
            <td>Foam</td>
            <td>Foam</td>
          </tr>
          <tr>
            <th>Finish Type</th>
            <td>Matte</td>
            <td>Matte</td>
          </tr>
          <tr>
            <th>Adjustable Headrest</th>
            <td>No</td>
            <td>Yes</td>
          </tr>
          <tr>
            <th>Maximum Load Capacity</th>
            <td>200 KG</td>
            <td>300 KG</td>
          </tr>
          <tr>
            <th>Origin of Manufacture</th>
            <td>India</td>
            <td>India</td>
          </tr>

          <tr>
            <th className="TableTitle">Dimensions</th>
          </tr>
          <tr>
            <th>Width</th>
            <td>263.32 cm</td>
            <td>263.32 cm</td>
          </tr>
          <tr>
            <th>Height</th>
            <td>76 cm</td>
            <td>76 cm</td>
          </tr>
          <tr>
            <th>Depth</th>
            <td>167.76 cm</td>
            <td>167.76 cm</td>
          </tr>
          <tr>
            <th>Weight</th>
            <td>45 KG</td>
            <td>65 KG</td>
          </tr>
          <tr>
            <th>Seat Height</th>
            <td>41.52 cm</td>
            <td>41.52 cm</td>
          </tr>
          <tr>
            <th>Leg Height</th>
            <td>5.48 cm</td>
            <td>5.48 cm</td>
          </tr>

          <tr>
            <th className="TableTitle">Warranty</th>
          </tr>
          <tr>
            <th>Warranty Summary</th>
            <td>1 Year Manufacturing Warranty</td>
            <td>1.2 Year Manufacturing Warranty</td>
          </tr>
          <tr>
            <th>Warranty Service Type</th>
            <td>
              For Warranty Claims or Any Product Related Issues please email the
              supplier. (Contact details on invoice)
            </td>
            <td>
              For Warranty Claims or Any Product Related Issues please email the
              supplier. (Contact details on invoice)
            </td>
          </tr>
          <tr>
            <th>Covered in Warranty</th>
            <td>Warranty Against Manufacturing Defects</td>
            <td>Warranty Against Manufacturing Defects</td>
          </tr>
          <tr>
            <th>Not Covered in Warranty</th>
            <td>
              The warranty does not cover damages due to misuse, wear &amp; tear
              or natural causes.
            </td>
            <td>
              The warranty does not cover damages due to misuse, wear &amp; tear
              or natural causes.
            </td>
          </tr>
          <tr>
            <th>Domestic Warranty</th>
            <td>1 Year</td>
            <td>3 Months</td>
          </tr>
          <tr>
            <th></th>
            <td>
                <button className="AddToCartBtn">Add To Cart</button>
            </td>
            <td>
                <button className="AddToCartBtn">Add To Cart</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
