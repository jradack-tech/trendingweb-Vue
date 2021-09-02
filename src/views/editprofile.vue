<template>
  <div>
    <div class="container">
      <section id="profile-sec">
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-body">
                <div class="wideget-user">
                  <div class="row">
                    <div class="col-lg-6 col-md-6">
                      <div class="wideget-user-desc d-sm-flex">
                        <div class="wideget-user-img">
                          <img
                            class=""
                            src="../assets/images/users/10.jpg"
                            alt="img"
                          />
                        </div>
                        <div class="user-wrap">
                          <h4>John Doe</h4>
                          <h6 class="text-muted mb-3">
                            john_doe12@bbb.com
                          </h6>
                          <h5>United States</h5>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                      <div class="wallet-verify-wrp">
                        <div class="wallet-img-box">
                          <img
                            class=""
                            src="../assets/images/meta.jpg"
                            alt="img"
                          />
                        </div>
                        <div class="wallet-box-content">
                          <span>Verified Wallet</span>
                          <p>XobictDvsTydixkndueAtrvct...</p>
                          <h4>Balance: 0</h4>
                          <button class="disconnect-wal">
                            Disconnect Wallet
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-8">
            <div class="form-box">
              <div class="panel panel-primary">
                <div class="tab-menu-heading">
                  <div class="tabs-menu ">
                    <!-- Tabs -->
                    <ul class="nav panel-tabs">
                      <li>
                        <a href="#tab1" class="active" data-toggle="tab">
                          Personal Info</a
                        >
                      </li>
                      <li>
                        <a href="#tab2" data-toggle="tab"> Notification </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="panel-body tabs-menu-body">
                  <div class="tab-content">
                    <div class="tab-pane active " id="tab1">
                      <div class="form-box-child">
                        <div
                          class="d-flex justify-content-between align-items-center"
                        >
                          <h6 class="text-right edit-head">
                            Edit your profile
                          </h6>
                        </div>
                        <div class="row">
                          <div class="col-md-12">
                            <label class="labels">Name</label
                            ><input
                              type="text"
                              placeholder="first name"
                              value="John"
                              class="form-control"
                            />
                          </div>
                        </div>
                        <div class="row mt-3">
                          <div class="col-md-12">
                            <label class="labels">Email</label
                            ><input
                              type="email"
                              placeholder="email"
                              value="male4234@gmail.com"
                              class="form-control"
                            />
                          </div>
                        </div>
                        <div class="row mt-3">
                          <div class="col-md-12">
                            <label class="labels">ETH Wallet</label
                            ><input
                              type="text"
                              placeholder="ETH Wallet"
                              value="XobictDvsTydixkndueAtrvct..."
                              class="form-control"
                            />
                          </div>
                        </div>
                        <div class="row mt-3">
                          <div class="col-md-6">
                            <label class="labels">Country</label
                            ><input
                              type="text"
                              placeholder="country"
                              value="USA"
                              class="form-control"
                            />
                          </div>
                          <div class="col-md-6 mrt-lable">
                            <label class="labels">State/Region</label
                            ><input
                              type="text"
                              value="Boston"
                              placeholder="state"
                              class="form-control"
                            />
                          </div>
                        </div>
                        <div class="text-center">
                          <button type="button" class="edit-p-btn">
                            Save Profile
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane  " id="tab2">
                      <p>
                        default model text, and a search for 'lorem ipsum' will
                        uncover many web sites still in their infancy. Various
                        versions have evolved over the years, sometimes by
                        accident, sometimes on purpose (injected humour and the
                        like
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="plan-wrp mrt-plan">
              <div class="tzone-head-wrp"><h3>Tzone Pro</h3></div>
              <ul class="list-pro">
                <li>
                  <i class="fe fe-check text-success mr-2"></i>Real-Time Uniswap
                  Prices &amp; Charts
                </li>
                <li>
                  <i class="fe fe-check text-success mr-2"></i>Token's chart and
                  trade history
                </li>
                <li>
                  <i class="fe fe-check text-success mr-2"></i>New Listings Pool
                  &amp; Pair Explorer
                </li>
                <li>
                  <i class="fe fe-check text-success mr-2"></i>Self Trade
                  History
                </li>
                <li>
                  <i class="fe fe-check text-success mr-2"></i>Unlimited
                  Favorites &amp; Alerts
                </li>
                <li>
                  <i class="fe fe-check text-success mr-2"></i>Scam Detection
                </li>
                <li>
                  <i class="fe fe-check text-success mr-2"></i>SUser rating
                </li>
              </ul>
            </div>
            <div class="plan-wrp">
              <div class="tzone-head-wrp"><h3>Tzone Pro +</h3></div>
              <ul class="list-pro">
                <li>
                  <i class="fe fe-check text-success mr-2"></i>All the benefits
                  of Pro, plus:
                </li>
                <li>
                  <i class="fe fe-check text-success mr-2"></i>Explorer Filters
                </li>
                <li>
                  <i class="fe fe-check text-success mr-2"></i>Top New Listings
                </li>
                <li>
                  <i class="fe fe-check text-success mr-2"></i>Whale Scanner
                </li>
                <li><i class="fe fe-check text-success mr-2"></i>Watchlists</li>
                <li>
                  <i class="fe fe-check text-success mr-2"></i>Custom Alerts
                </li>
              </ul>
            </div>
            <div class="plan-wrp">
              <div class="tzone-head-wrp"><h3>Tzone Premium</h3></div>
              <ul class="list-pro">
                <li>
                  <i class="fe fe-check text-success mr-2"></i>Multiple enhanced
                  watchlists
                </li>
                <li>
                  <i class="fe fe-check text-success mr-2"></i>Exclusive
                  Upcoming Features
                </li>
                <li><i class="fe fe-check text-success mr-2"></i>60 Days</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "editprofile",
};
</script>
