
import gql from "graphql-tag";

async function productDetails(context, params) {
    console.log('PROPELLER getProduct params', params);

    let query = gql`{
        product(id: ${params.id}) {
          name {
            value
            language
          }
          description {
            value
            language
          }
          shortDescription {
            value
            language
          }
          sku
          categoryId
          path
          shortName
          eanCode
          manufacturer
          supplier
          supplierCode
          tag
          taxCode
          status
          originalPrice
          costPrice
          suggestedPrice
          storePrice
          minimumQuantity
          unit
          purchaseUnit
          purchaseMinimumQuantity
          econommicOrderQuantity
          ... on Product {
            name {
              value
              language
            }
            description {
              value
              language
            }
            shortDescription {
              value
              language
            }
            sku
            categoryId
            path
            shortName
            manufacturerCode: eanCode
            manufacturer
            supplier
            supplierCode
            originalPrice
            costPrice
            suggestedPrice
            storePrice
            creditPoints
            minimumQuantity
            unit
            purchaseUnit
            id
            language
            class
            classId
            images(siteId: 1) {
              id
              imageId
              name
              url(fillColor: "white", method: fill, height: 800, width: 800)
              type
              order
            }
            price {
              value
              quantity
              discount {
                discountId
                formula
                type
                quantity
                value
                validFrom
                validTo
                hops
              }
              taxCode
              type
            }
            attributes {
              id
              searchId
              description {
                value
                language
              }
              type
              isSearchable
              isPublic
              isHidden
              enumValue
              intValue
              decimalValue
              dateValue
              textValue {
                values
                language
              }
            }
          }
        }
      }`;
    
    const data = await context.client.query({
        query: query
    });

    console.log('PROPELLER data fetched', data);

    return data;
}

export default productDetails;