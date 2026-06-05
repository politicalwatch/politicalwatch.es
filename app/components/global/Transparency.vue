<template>

<section class="pw-transparency">

  <div class="pw-transparency__header">
    <h3>{{ t("pages.transparency.graphs_title") }}</h3>
    <p>{{ t("pages.transparency.graphs_subtitle") }}</p>
  </div>

  <div class="pw-grid">

    <div class="pw-card pw-card--full">
      <h3>{{ t("pages.transparency.graph1_title") }}</h3>

      <div class="pw-bar-chart">

        <div class="pw-bar-row">
          <span class="pw-bar-label">Open Society Foundations</span>
          <div class="pw-bar-track">
            <div class="pw-bar-fill" style="width:100%;background:#e40047;"></div>
          </div>
          <span class="pw-bar-value">461.779 €</span>
        </div>

        <div class="pw-bar-row">
          <span class="pw-bar-label">Oxfam Intermón</span>
          <div class="pw-bar-track">
            <div class="pw-bar-fill" style="width:55.1%;background:#172844;"></div>
          </div>
          <span class="pw-bar-value">254.287 €</span>
        </div>

        <div class="pw-bar-row">
          <span class="pw-bar-label">Sec. Estado Cooperación Internacional</span>
          <div class="pw-bar-track">
            <div class="pw-bar-fill" style="width:51.5%;background:#4a6fa5;"></div>
          </div>
          <span class="pw-bar-value">237.629 €</span>
        </div>

        <div class="pw-bar-row">
          <span class="pw-bar-label">RTVE</span>
          <div class="pw-bar-track">
            <div class="pw-bar-fill" style="width:44.3%;background:#c0392b;"></div>
          </div>
          <span class="pw-bar-value">204.535 €</span>
        </div>

        <div class="pw-bar-row">
          <span class="pw-bar-label">RED.ES</span>
          <div class="pw-bar-track">
            <div class="pw-bar-fill" style="width:37.0%;background:#2e5fa3;"></div>
          </div>
          <span class="pw-bar-value">170.835 €</span>
        </div>

        <div class="pw-bar-row">
          <span class="pw-bar-label">European Climate Foundation</span>
          <div class="pw-bar-track">
            <div class="pw-bar-fill" style="width:22.4%;background:#e8607a;"></div>
          </div>
          <span class="pw-bar-value">103.617 €</span>
        </div>

        <div class="pw-bar-row">
          <span class="pw-bar-label">Central European Media Enterprises</span>
          <div class="pw-bar-track">
            <div class="pw-bar-fill" style="width:16.8%;background:#1a3a5c;"></div>
          </div>
          <span class="pw-bar-value">77.388 €</span>
        </div>

        <div class="pw-bar-row">
          <span class="pw-bar-label">Sec. Estado Agenda 2030</span>
          <div class="pw-bar-track">
            <div class="pw-bar-fill" style="width:9.3%;background:#f28097;"></div>
          </div>
          <span class="pw-bar-value">43.117 €</span>
        </div>

        <div class="pw-bar-row">
          <span class="pw-bar-label">Plataforma de Org. de Infancia</span>
          <div class="pw-bar-track">
            <div class="pw-bar-fill" style="width:9.1%;background:#0d1f36;"></div>
          </div>
          <span class="pw-bar-value">42.250 €</span>
        </div>

        <div class="pw-bar-row">
          <span class="pw-bar-label">FEMP</span>
          <div class="pw-bar-track">
            <div class="pw-bar-fill" style="width:8.7%;background:#ff4d75;"></div>
          </div>
          <span class="pw-bar-value">40.336 €</span>
        </div>

      </div>
    </div>


    <div class="pw-card">
      <h3>{{ t("pages.transparency.graph2_title") }}</h3>
      <div class="pw-donut-wrap">
        <div class="pw-donut" style="background: conic-gradient(
          #172844   0deg   156.2deg,
          #e40047   156.2deg 267.8deg,
          #4a6fa5   267.8deg 354.9deg,
          #f28097   354.9deg 358.9deg,
          #ff4d75   358.9deg 359.6deg,
          #0d1f36   359.6deg 360deg
        );"></div>
        <div class="pw-legend">
          <div class="pw-legend-row">
            <span class="pw-legend-dot" style="background:#172844;"></span>
            <span class="pw-legend-name">{{ t("pages.transparency.graph2_source_sp") }}</span>
            <span class="pw-legend-val">854.520 €</span>
            <span class="pw-legend-pct">43,4%</span>
          </div>
          <div class="pw-legend-row">
            <span class="pw-legend-dot" style="background:#e40047;"></span>
            <span class="pw-legend-name">{{ t("pages.transparency.graph2_source_fp") }}</span>
            <span class="pw-legend-val">611.760 €</span>
            <span class="pw-legend-pct">31,0%</span>
          </div>
          <div class="pw-legend-row">
            <span class="pw-legend-dot" style="background:#4a6fa5;"></span>
            <span class="pw-legend-name">{{ t("pages.transparency.graph2_source_sc") }}</span>
            <span class="pw-legend-val">477.150 €</span>
            <span class="pw-legend-pct">24,2%</span>
          </div>
          <div class="pw-legend-row">
            <span class="pw-legend-dot" style="background:#f28097;"></span>
            <span class="pw-legend-name">{{ t("pages.transparency.graph2_source_u") }}</span>
            <span class="pw-legend-val">22.100 €</span>
            <span class="pw-legend-pct">1,1%</span>
          </div>
          <div class="pw-legend-row">
            <span class="pw-legend-dot" style="background:#ff4d75;"></span>
            <span class="pw-legend-name">{{ t("pages.transparency.graph2_source_dp") }}</span>
            <span class="pw-legend-val">3.804 €</span>
            <span class="pw-legend-pct">0,2%</span>
          </div>
          <div class="pw-legend-row">
            <span class="pw-legend-dot" style="background:#0d1f36;"></span>
            <span class="pw-legend-name">{{ t("pages.transparency.graph2_source_o") }}</span>
            <span class="pw-legend-val">1.460 €</span>
            <span class="pw-legend-pct">0,1%</span>
          </div>
        </div>
      </div>
    </div>


    <div class="pw-card">
      <h3>{{ t("pages.transparency.graph3_title") }}</h3>
      <div class="pw-donut-wrap">
        <div class="pw-donut" style="background: conic-gradient(
          #e40047  0deg    149.6deg,
          #172844  149.6deg 254.7deg,
          #4a6fa5  254.7deg 335.9deg,
          #f28097  335.9deg 360deg
        );"></div>
        <div class="pw-legend">
          <div class="pw-legend-row">
            <span class="pw-legend-dot" style="background:#e40047;"></span>
            <span class="pw-legend-name">{{ t("pages.transparency.graph3_type_dt") }}</span>
            <span class="pw-legend-val">808.791 €</span>
            <span class="pw-legend-pct">41,6%</span>
          </div>
          <div class="pw-legend-row">
            <span class="pw-legend-dot" style="background:#172844;"></span>
            <span class="pw-legend-name">{{ t("pages.transparency.graph3_type_mip") }}</span>
            <span class="pw-legend-val">565.395 €</span>
            <span class="pw-legend-pct">29,1%</span>
          </div>
          <div class="pw-legend-row">
            <span class="pw-legend-dot" style="background:#4a6fa5;"></span>
            <span class="pw-legend-name">{{ t("pages.transparency.graph3_type_ci") }}</span>
            <span class="pw-legend-val">439.278 €</span>
            <span class="pw-legend-pct">22,6%</span>
          </div>
          <div class="pw-legend-row">
            <span class="pw-legend-dot" style="background:#f28097;"></span>
            <span class="pw-legend-name">{{ t("pages.transparency.graph3_type_fs") }}</span>
            <span class="pw-legend-val">132.652 €</span>
            <span class="pw-legend-pct">6,8%</span>
          </div>
        </div>
      </div>
    </div>

  </div>

</section>

</template>

<script setup lang="ts">
const { t } = useI18n();
</script>

<style lang="scss" scoped>
.pw-transparency *,
.pw-transparency *::before,
.pw-transparency *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.pw-transparency {
  font-family: 'Georgia', 'Times New Roman', serif;
  color: #172844;
  max-width: 960px;
}

/* Cabecera */
.pw-transparency__header {
  margin-top: 36px;
  margin-bottom: 36px;
}
.pw-transparency__header h2 {
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: #172844;
  margin-bottom: 4px;
}
.pw-transparency__header p {
  font-size: 0.8rem;
  color: #4a6fa5;
  font-style: italic;
}

/* Grid */
.pw-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}
.pw-card {
  background: #fff;
  border-radius: 8px;
  padding: 24px 20px 20px;
  box-shadow: 0 1px 4px rgba(23,40,68,.10);
  border-top: 3px solid #e40047;
}
.pw-card.pw-card--full { grid-column: 1 / -1; }
.pw-card h3 {
  font-size: 0.82rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .06em;
  color: #4a6fa5;
  margin-bottom: 20px;
}

/* ── CHART 1: Barras horizontales ── */
.pw-bar-chart { display: flex; flex-direction: column; gap: 10px; }

.pw-bar-row { display: grid; grid-template-columns: 210px 1fr 90px; align-items: center; gap: 10px; }

.pw-bar-label {
  font-size: 0.76rem;
  color: #172844;
  line-height: 1.3;
  text-align: right;
}

.pw-bar-track {
  background: #f0f2f5;
  border-radius: 3px;
  height: 20px;
  overflow: hidden;
}
.pw-bar-fill {
  height: 100%;
  border-radius: 3px;
}

.pw-bar-value {
  font-size: 0.76rem;
  color: #172844;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}

.pw-donut-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.pw-donut {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  flex-shrink: 0;
  position: relative;
}
.pw-donut::after {
  content: '';
  position: absolute;
  inset: 36px;
  border-radius: 50%;
  background: #fff;
}

.pw-legend { width: 100%; }
.pw-legend-row {
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin-bottom: 8px;
  font-size: 0.78rem;
}
.pw-legend-dot {
  width: 10px;
  height: 10px;
  border-radius: 2px;
  flex-shrink: 0;
  margin-top: 2px;
}
.pw-legend-name { color: #172844; flex: 1; line-height: 1.3; }
.pw-legend-val {
  color: #4a6fa5;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  font-size: 0.75rem;
}
.pw-legend-pct {
  color: #e40047;
  font-weight: 700;
  white-space: nowrap;
  font-size: 0.75rem;
  min-width: 36px;
  text-align: right;
}

@media (max-width: 640px) {
  .pw-grid { grid-template-columns: 1fr; }
  .pw-card.pw-card--full { grid-column: auto; }
  .pw-bar-row { grid-template-columns: 140px 1fr 80px; }
}
</style>
