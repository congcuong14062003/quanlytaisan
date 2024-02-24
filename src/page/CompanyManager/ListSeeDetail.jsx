import ButtonAction from "../../Component/ButtonAction/ButtonAction";
import "./ListSeeDetail.scss";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
function ListSeeDetail() {
  return (
    <div class="content">
      <div className="top-content">
        <div className="row">
          <div className="col-md-2">
            <div className="text-left">
              <h3 className="heading-page text-uppercase">Công ty</h3>
            </div>
          </div>
          <div className="col-md-5 custom-col-child-padding">
            <div className="formSearch">
              <div>
                <input
                  type="text"
                  placeholder="Tên công ty, Tên viết tắt, SĐT"
                  name="search"
                  id="search"
                  className="inputSearch"
                  fdprocessedid="ux3k6i"
                />
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="d-flex action-button">
              <ButtonAction title="Bỏ lọc" />
              <ButtonAction title="Xuất excel" />
              <ButtonAction title="Thêm mới" className="primary" />
            </div>
          </div>
        </div>
      </div>
      <div className="body-content row">
        <div className="col-md-2">
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Trạng thái
              </InputLabel>
              <NativeSelect
                defaultValue={10}
                inputProps={{
                  name: "age",
                  id: "uncontrolled-native",
                }}
              >
                <option value={10}>Hoạt động</option>
                <option value={20}>Không hoạt động</option>
              </NativeSelect>
            </FormControl>
          </Box>
        </div>
        <div className="col-md-10 custom-col-child-padding">
          <div className="fui-table-ui-basic-linh table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Amount</th>
                  <th>Value</th>
                  <th>Strategy A</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Company Name</td>
                  <td className="pcs">457</td>
                  <td className="cur">6535178</td>
                  <td className="per">50,71</td>
                </tr>
                <tr>
                  <td>Company Name</td>
                  <td className="pcs">457</td>
                  <td className="cur">6535178</td>
                  <td className="per">50,71</td>
                </tr>
                <tr>
                  <td>Company Name</td>
                  <td className="pcs">457</td>
                  <td className="cur">6535178</td>
                  <td className="per">50,71</td>
                </tr>
                <tr>
                  <td>Company Name</td>
                  <td className="pcs">457</td>
                  <td className="cur">6535178</td>
                  <td className="per">50,71</td>
                </tr>
                <tr>
                  <td>Company Name</td>
                  <td className="pcs">457</td>
                  <td className="cur">6535178</td>
                  <td className="per">50,71</td>
                </tr>
                <tr>
                  <td>Company Name</td>
                  <td className="pcs">457</td>
                  <td className="cur">6535178</td>
                  <td className="per">50,71</td>
                </tr>
                <tr>
                  <td>Company Name</td>
                  <td className="pcs">457</td>
                  <td className="cur">6535178</td>
                  <td className="per">50,71</td>
                </tr>
                <tr>
                  <td>Company Name</td>
                  <td className="pcs">457</td>
                  <td className="cur">6535178</td>
                  <td className="per">50,71</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListSeeDetail;
