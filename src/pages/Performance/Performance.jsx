import React from "react";
import { ChartNoAxesCombined } from "lucide-react";
import Layout from "../../components/Layout/Layout";

function Performance() {
  return (
    <>
      <Layout>
        <div className="dashboard">
          <div className="dashboard-header">
            <div className="menu">
              <div className="icon">
                <ChartNoAxesCombined strokeWidth={1.5} size={28} />
              </div>
              <div className="title">Performance</div>
              <div className="desc">Overview All Component</div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Performance;
