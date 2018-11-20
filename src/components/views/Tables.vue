<template>
  <section class="content">
    <div class="row center-block">
      <h2>Trial Data A</h2>
      <div class="col-md-12">
        <div class="box">
          <div class="box-header">
            <h3 class="box-title">Trial Data Goals</h3>
          </div>
          <!-- /.box-header -->
          <div class="box-body no-padding table-responsive">
            <table class="table table-striped">
              <tbody>
                <tr>
                  <th style="width: 10px">#</th>
                  <th>Task</th>
                  <th>Progress</th>
                  <th style="width: 40px">Label</th>
                </tr>
                <tr>
                  <td>1.</td>
                  <td>Clinical Trial A</td>
                  <td>
                    <div class="progress progress-xs">
                      <div class="progress-bar progress-bar-danger" style="width: 0%"></div>
                    </div>
                  </td>
                  <td><span class="badge bg-red">0%</span></td>
                </tr>
                <tr>
                  <td>2.</td>
                  <td>Clinical Trial B</td>
                  <td>
                    <div class="progress progress-xs">
                      <div class="progress-bar progress-bar-yellow" style="width: 17%"></div>
                    </div>
                  </td>
                  <td><span class="badge bg-yellow">17%</span></td>
                </tr>
                <tr>
                  <td>3.</td>
                  <td>Clinical Trial C</td>
                  <td>
                    <div class="progress progress-xs progress-striped active">
                      <div class="progress-bar progress-bar-primary" style="width: 30%"></div>
                    </div>
                  </td>
                  <td><span class="badge bg-light-blue">30%</span></td>
                </tr>
                <tr>
                  <td>4.</td>
                  <td>Clinical Trial D</td>
                  <td>
                    <div class="progress progress-xs progress-striped active">
                      <div class="progress-bar progress-bar-success" style="width: 60%"></div>
                    </div>
                  </td>
                  <td><span class="badge bg-green">60%</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- /.box-body -->
        </div>
      </div>
    </div>

    <div class="row center-block">
      <h2>Trial Data History</h2>
      <div class="col-md-12">
        <div class="box">
          <div class="box-header">
            <h3 class="box-title">Past Transaction History</h3>
          </div>
          <!-- /.box-header -->
          <div class="box-body">
            <div class="dataTables_wrapper form-inline dt-bootstrap" id="example1_wrapper">
              <div class="row">
                <div class="col-sm-6">
                  <div id="example1_length" class="dataTables_length">

                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-sm-12 table-responsive">
                  <table aria-describedby="example1_info" role="grid" id="example1" class="table table-bordered table-striped dataTable">
                    <thead>
                      <tr role="row">
                        <th aria-label="Rendering engine: activate to sort column descending" aria-sort="ascending" style="width: 167px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting_asc">Name</th>
                        <th aria-label="Browser: activate to sort column ascending" style="width: 207px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Source</th>
                        <th aria-label="Platform(s): activate to sort column ascending" style="width: 182px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Test</th>
                        <th aria-label="Engine version: activate to sort column ascending" style="width: 142px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="even" role="row">
                        <td class="sorting_1">Patient A</td>
                        <td>IOT</td>
                        <td>1</td>
                        <td>15</td>
                      </tr>
                      <tr class="odd" role="row">
                        <td class="sorting_1">Patient A</td>
                        <td>IOT</td>
                        <td>2</td>
                        <td>100</td>
                      </tr>
                      <tr class="even" role="row">
                        <td class="sorting_1">Patient B</td>
                        <td>IOT</td>
                        <td>1</td>
                        <td>25</td>
                      </tr>
                      <tr class="odd" role="row">
                        <td class="sorting_1">Patient C</td>
                        <td>Reported</td>
                        <td>1</td>
                        <td>25</td>
                      </tr>
                      <tr class="even" role="row">
                        <td class="sorting_1">Patient A</td>
                        <td>IOT</td>
                        <td>2</td>
                        <td>10</td>
                      </tr>
                      <tr class="odd" role="row">
                        <td class="sorting_1">Patient B</td>
                        <td>Reported</td>
                        <td>3</td>
                        <td>200</td>
                      </tr>
                      <tr class="even" role="row">
                        <td class="sorting_1">Patient B</td>
                        <td>IOT</td>
                        <td>2</td>
                        <td>182</td>
                      </tr>
                      <tr class="odd" role="row">
                        <td class="sorting_1">Patient C</td>
                        <td>Reported</td>
                        <td>3</td>
                        <td>130</td>
                      </tr>
                      <tr class="even" role="row">
                        <td class="sorting_1">Patient C</td>
                        <td>Reported</td>
                        <td>2</td>
                        <td>15</td>
                      </tr>
                      <tr class="odd" role="row">
                        <td class="sorting_1">Patient A</td>
                        <td>IOT</td>
                        <td>1</td>
                        <td>180</td>
                      </tr>
                      <tr class="even" role="row">
                        <td class="sorting_1">Patient D</td>
                        <td>IOT</td>
                        <td>2</td>
                        <td>35</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <th colspan="1" rowspan="1">Name</th>
                        <th colspan="1" rowspan="1">Source</th>
                        <th colspan="1" rowspan="1">Category</th>
                        <th colspan="1" rowspan="1">Value</th>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
            <!-- /.box-body -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import $ from 'jquery'
// Require needed datatables modules
require('datatables.net')
require('datatables.net-bs')

export default {
  name: 'Tables',
  mounted() {
    this.$nextTick(() => {
      $('#example1').DataTable()
    })
  }
}
</script>

<style>
/* Using the bootstrap style, but overriding the font to not draw in
   the Glyphicons Halflings font as an additional requirement for sorting icons.

   An alternative to the solution active below is to use the jquery style
   which uses images, but the color on the images does not match adminlte.

@import url('/static/js/plugins/datatables/jquery.dataTables.min.css');
*/

@import url('/static/js/plugins/datatables/dataTables.bootstrap.css');

table.dataTable thead .sorting:after,
table.dataTable thead .sorting_asc:after,
table.dataTable thead .sorting_desc:after {
  font-family: 'FontAwesome';
}

table.dataTable thead .sorting:after {
  content: '\f0dc';
}

table.dataTable thead .sorting_asc:after {
  content: '\f0dd';
}

table.dataTable thead .sorting_desc:after {
  content: '\f0de';
}
</style>
