<template>
  <div>
    <h1 class="text-center">Submit Trial Data</h1>
    <section class="content">
      <div class="row">
        <div class="col-md-12">
          <div class="box box-info">
            <!-- Input Addons -->
            <div class="box-header with-border">
              <h3 class="box-title">Inputs</h3>
            </div>

            <div class="box-body">
              <!-- calendar group -->
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="fa fa-fw fa-calendar"></i>
                </span>
                <datepicker :readonly="true" format="MMM/D/YYYY" id="dateInput" width="100%"></datepicker>
              </div>
              <br />
              <br />

              <!-- with characthers -->
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="fa fa-fw fa-at" aria-hidden="true"></i>
                </span>
                <input class="form-control" placeholder="Transaction Info" type="text">
              </div>
              <br />
              <br>
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="fa fa-fw fa-usd" aria-hidden="true"></i>
                </span>
                <input class="form-control" type="text">
                <span class="input-group-addon">.00</span>
              </div>
              <br />
              <h4>Enter Details Below</h4>
              <div class="input-group">
                <input class="form-control" type="text">
                <span class="input-group-addon"><i class="fa fa-fw fa-check"></i></span>
              </div>

              <!-- /input-group -->
            </div>
            <!-- /.box-body -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
require('moment')
import datepicker from 'vue-date-picker'

export default {
  name: 'Settings',
  components: { datepicker },
  computed: {
    datetime () {
      return new Date()
    }
  },
  methods: {
    clearInput (vueModel) {
      vueModel = ''
    }
  }
}
</script>

<style>
.datetime-picker input {
  height: 4em !important;
}
</style>
