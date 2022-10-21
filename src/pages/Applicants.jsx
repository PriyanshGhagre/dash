import React, {useState, useEffect} from "react";
import { applicantStatic } from "../data/content";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids";
import { Header } from "../components";
import { applicantsGrid } from "../data/content";
const Applicants = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNjBhMzgxYjhjNGM5NGZlOTkyNDYxOGFjMDk2Y2U3ZmRiZTIxMDY1MTE2N2RlYTQ4OTY1ZjZhNmY4NGQ5NzIzMGE3OTFhMzBlOGFmYzc4M2QiLCJpYXQiOjE2NjYxNzgxNTQuNDYwNTYxLCJuYmYiOjE2NjYxNzgxNTQuNDYwNTY3LCJleHAiOjE2OTc3MTQxNTQuNDQwMzA2LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.ArZit_ci1l9TXbBj2VNds0PcP8zqvvDG7w4z2R7JIeVqlmvpNRqUBzDWljKWjxYJ0Yr1-b0FXJkWK3dpkTbXhBVp7Va-0wh5zXDTdoUaYYOSDGhnHnCyx3LyQiYoodw_SvLH-6HNhCjjAH0OzS-9yUmo-ES1zeJLHufc-zXjhCdmOa6DfBjsrIUSIHWPxwzfovZT3f8xpvnuTsUS0EPECrWq1o3Uerf6pK6CZENHzLzPaXU6zaAlUVQ47SQkxZvyNrKjELg3D2fuQ5WmyBsUL_3ms0pNdFycX7ww2_ocHNu0VWT4pNIe97rHpVA8C6OtGTegMnyKhobBPhg4340A1xkA7Gx7VSyShcTTw1wp47iVIvIpPNNWz-Uc9a5sJ475JMcHQMDbueUCNHJLtowlu6u3bH35fqbWGyfnmbVX8dzdfQAnA4cdxXvJsrOqJr-fdycz_dObqLclOwLFxqPwCqfJNFAZr_4N4YeIOZxaXMftzLHtwTsgTF8Np1ysN78s57uUWbNRgjCFAs5BOf8GXslRxPACADOK_AuvWc2EhHtnqLfLl-bs7wJqZNDyG3RLisv2r7Q_3IOGnEJggmbybDoGAMnG1-OMkKX0WrDdaGrGk_DAGQMyibW9Zu6OI5R3uLZlkPRU24WRWQFrJcHbrJwmIfzx1gHmGOPxKep2GcU";
  useEffect(() => {
    fetch("http://localhost:8000/api/v1/applicants", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setIsLoaded(true);
          setItems(result.body.applicants);
        },
        (error) => {
          setIsLoaded(true);
          setItems(applicantStatic.body.applicants)
          // setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="mx-2 mt-16 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
        <Header category="Page" title="Applicants" />
        <GridComponent
        id="gridcomp"
        dataSource={items}
        allowPaging>
          <ColumnsDirective>
            {applicantsGrid.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))}
          </ColumnsDirective>
        </GridComponent>
      </div>
    );
  }
};

export default Applicants;
