const languages =
{
    'et': 'estonian',
    'ru': 'russian',
    'en': 'english'
}

function changeLanguage(language)
{
    //window.localStorage.setItem('language', language);
    //window.location.replace(`./../${language}`);
}

function getHeaderTemplate(language)
{
    var language_options = '';
    Object.keys(languages).forEach(l => {
        language_options += `
        <li 
        css-text='center'
        class="hoverable_text" 
        onclick="changeLanguage('${l}')"
        onmouseover='mouseOver()'
        onmouseout='mouseOut()'
        >${languages[l]}</li>`;
    });
    var club_name = '';
    'AquaMarine'.split('').forEach(c => {
        club_name += `
        <span>${c}</span>`;
    });
    return `
        <div
            css-flex='content justify_content_center'
            css-height='5_rem'
        >
            <ul
                css-list=''
                css-flex='align_items_center gap_2_rem justify_content_end'
                css-color='text_counter'
                css-text='acme uppercase 22_px 500'
            >
            ${language_options}
            </ul>
            <div
                css-flex='vertical'
                css-margin='left_2_rem right_2_rem'
            >
                <span
                    css-flex='justify_content_center'
                    css-padding='top_2_rem'
                >
                    <svg version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        width="160"
                        height="50"
                        viewBox="0, 0, 400,125"
                    >
                        <g 
                            class="logo_svg_shadow_container"
                            stroke="#1c2c64"
                            fill="#1c2c64"
                            fill-rule="evenodd"
                        >
                            <path
                                class="logo_svg_shadow_tale"
                                d="M27.182 5.775 C 24.748 9.083,20.946 16.415,20.075 19.484 C 19.978 19.826,20.006 19.866,20.272 19.761 C 21.496 19.280,23.696 18.986,25.903 
                                19.010 C 27.194 19.024,28.249 18.971,28.249 18.892 C 28.248 18.814,28.142 17.532,28.013 16.043 C 27.828 13.902,27.813 12.437,27.943 9.043 
                                C 28.032 6.682,28.087 4.724,28.064 4.692 C 28.041 4.660,27.644 5.147,27.182 5.775"
                            ></path>
                            <path
                                class="logo_svg_shadow_arm"
                                d="M293.596 73.022 C 292.180 77.016,290.014 77.951,285.098 76.690 C 282.383 75.994,282.438 75.972,281.324 78.201 C 280.853 79.145,280.100 
                                80.467,279.650 81.139 C 279.201 81.811,278.833 82.392,278.833 82.431 C 278.833 82.469,279.652 82.500,280.652 82.500 C 282.833 82.500,296.230 
                                82.949,298.000 83.082 C 298.688 83.133,301.200 83.286,303.583 83.421 C 305.967 83.556,309.604 83.778,311.667 83.914 C 321.135 84.538,323.506 
                                84.691,327.167 84.918 C 329.321 85.051,332.583 85.236,334.417 85.328 C 336.250 85.420,339.287 85.577,341.167 85.676 C 346.410 85.955,351.362 
                                85.930,354.333 85.609 C 382.228 82.600,385.406 82.813,390.792 88.059 C 392.129 89.362,392.143 89.053,390.813 87.601 C 386.812 83.235,379.971 
                                81.401,366.500 81.080 C 359.952 80.925,352.469 80.458,346.500 79.833 C 339.120 79.060,335.750 78.665,331.667 78.095 C 330.704 77.961,329.317 
                                77.771,328.583 77.674 C 327.850 77.576,326.800 77.425,326.250 77.339 C 325.700 77.252,324.500 77.068,323.583 76.929 C 321.316 76.585,314.906 
                                75.554,313.167 75.253 C 312.387 75.118,310.625 74.815,309.250 74.580 C 307.875 74.344,304.987 73.850,302.833 73.481 C 298.329 72.710,296.134 
                                72.365,294.832 72.226 L 293.913 72.128 293.596 73.022"
                            ></path>
                        </g>
                        <g
                            class="logo_svg_hair_container"
                            stroke="#1c2c64"
                            fill="#1c2c64"
                            fill-rule="evenodd"
                        >
                            <path
                                class="logo_svg_hair_top"
                                d="M274.952 41.515 C 272.105 41.932,270.254 42.719,261.000 47.447 C 258.296 48.829,255.446 50.236,254.667 50.575 C 253.887 50.913,253.100 
                                51.258,252.917 51.340 C 252.733 51.423,252.171 51.645,251.667 51.833 C 251.162 52.022,250.600 52.247,250.417 52.335 C 249.818 52.620,247.120 
                                53.466,244.000 54.345 C 239.382 55.647,230.948 56.173,225.417 55.505 C 223.796 55.309,221.070 54.879,220.500 54.730 C 220.220 54.657,220.138 
                                54.677,220.250 54.790 C 220.402 54.944,230.888 57.617,233.833 58.253 C 234.521 58.402,235.383 58.591,235.750 58.675 C 237.178 59.000,241.512 
                                59.732,244.250 60.111 C 247.394 60.546,256.672 60.550,259.083 60.118 C 267.518 58.604,272.605 55.688,278.041 49.250 C 281.252 45.448,283.088 
                                45.164,287.167 47.842 C 288.875 48.964,288.978 48.923,287.893 47.557 C 283.995 42.650,279.986 40.779,274.952 41.515 "
                            ></path>
                            <path
                                class="logo_svg_hair_middle"
                                d="M176.667 54.286 C 170.791 54.654,166.017 55.589,161.583 57.241 C 159.513 58.013,157.333 59.023,157.333 59.212 C 
                                157.333 59.298,157.443 59.327,157.577 59.276 C 158.971 58.741,164.009 58.775,167.250 59.342 C 168.920 59.634,169.490 
                                59.757,171.833 60.329 C 173.067 60.630,176.926 61.963,179.417 62.949 C 181.929 63.943,182.162 64.041,183.887 64.820 C 
                                184.512 65.102,185.048 65.333,185.078 65.333 C 185.109 65.333,185.760 65.625,186.525 65.982 C 187.290 66.339,188.704 
                                66.984,189.667 67.417 C 190.629 67.849,192.043 68.495,192.808 68.851 C 193.574 69.208,194.224 69.500,194.254 69.500 C 
                                194.284 69.500,194.883 69.765,195.584 70.089 C 214.889 79.006,229.478 81.280,244.341 77.688 C 246.315 77.211,250.990 
                                75.738,252.083 75.248 C 252.358 75.125,253.258 74.743,254.083 74.399 C 258.946 72.372,265.137 68.779,270.401 64.930 C 
                                272.534 63.370,272.498 63.224,270.229 64.230 C 259.908 68.807,246.730 68.613,227.000 63.595 C 223.500 62.704,217.906 
                                61.226,214.667 60.334 C 198.013 55.752,185.374 53.740,176.667 54.286"
                            ></path>
                            <path
                                class="logo_svg_hair_bottom"
                                d="M140.516 62.534 C 130.518 63.166,119.519 67.227,108.865 74.220 C 107.491 75.122,107.792 75.192,109.443 74.356 C 121.153 68.423,134.053 
                                67.547,147.548 71.769 C 153.231 73.547,158.124 75.469,164.308 78.351 C 165.074 78.708,165.723 79.000,165.752 79.000 C 165.781 79.000,168.117 
                                80.133,170.944 81.518 C 173.771 82.902,177.733 84.844,179.750 85.832 C 183.477 87.658,186.985 89.333,187.082 89.333 C 187.112 89.333,187.837 
                                89.660,188.693 90.060 C 189.549 90.459,191.188 91.175,192.333 91.650 C 193.479 92.125,194.567 92.584,194.750 92.671 C 196.040 93.283,201.951 
                                95.332,204.583 96.080 C 205.133 96.236,205.921 96.463,206.333 96.585 C 212.411 98.374,221.229 99.222,227.250 98.596 C 230.530 98.255,232.537 
                                97.896,236.167 97.003 C 241.006 95.813,248.016 92.508,253.583 88.792 C 255.302 87.644,259.584 84.481,259.833 84.174 C 259.879 84.118,260.142 
                                83.899,260.417 83.688 C 262.021 82.458,264.616 80.063,267.838 76.839 C 272.529 72.146,273.105 71.382,270.794 72.921 C 262.665 78.332,254.633 
                                82.076,245.250 84.827 C 244.975 84.908,244.000 85.133,243.083 85.329 C 242.167 85.524,241.154 85.749,240.833 85.829 C 229.337 88.699,212.950 
                                86.250,196.667 79.229 C 195.610 78.773,195.430 78.696,194.000 78.080 C 193.221 77.745,192.273 77.331,191.894 77.160 C 191.514 76.989,190.464 
                                76.516,189.560 76.109 C 188.656 75.703,187.392 75.128,186.750 74.833 C 186.108 74.538,184.871 73.976,184.000 73.583 C 183.129 73.191,181.929 
                                72.646,181.333 72.373 C 167.611 66.082,157.414 63.072,147.870 62.495 C 144.871 62.314,143.909 62.319,140.516 62.534"
                            ></path>
                        </g>
                        <g 
                            id="logo_svg_body"
                            stroke="#fbfbfb" 
                            fill="#fbfbfb" 
                            fill-rule="evenodd"
                        >
                            <path
                                class="logo_svg_body"
                                d="M26.750 5.068 C 22.065 6.835,18.099 10.636,14.214 17.083 C 13.078 18.967,11.151 23.489,10.343 26.167 C 10.052 27.129,9.791 27.992,9.762 28.083 
                                C 9.733 28.175,9.695 28.305,9.677 28.372 C 9.660 28.439,9.574 28.739,9.487 29.039 C 9.399 29.338,9.292 29.771,9.249 30.000 C 9.206 30.229,9.129 
                                30.604,9.078 30.833 C 8.998 31.196,8.673 32.879,8.434 34.167 C 7.671 38.282,7.568 46.331,8.226 50.417 C 8.270 50.692,8.346 51.142,8.394 51.417 
                                C 8.443 51.692,8.599 52.592,8.741 53.417 C 9.651 58.698,11.388 63.928,13.917 69.000 C 15.900 72.978,18.062 76.325,21.076 80.083 C 22.733 
                                82.150,22.887 82.330,23.917 83.420 C 25.717 85.325,26.327 85.941,27.024 86.558 C 27.423 86.911,28.087 87.512,28.500 87.893 C 28.912 88.275,29.662 
                                88.923,30.167 89.333 C 30.671 89.743,31.121 90.121,31.167 90.174 C 31.310 90.337,34.031 92.389,35.167 93.190 C 39.146 95.998,41.951 97.649,48.167 
                                100.845 C 54.334 104.016,69.281 109.095,75.833 110.245 C 75.971 110.270,76.383 110.349,76.750 110.423 C 77.117 110.496,77.473 110.543,77.542 
                                110.528 C 77.610 110.513,77.667 110.560,77.667 110.633 C 77.667 110.707,77.835 110.772,78.042 110.778 C 78.248 110.785,78.642 110.835,78.917 
                                110.891 C 79.192 110.946,80.317 111.173,81.417 111.396 C 82.517 111.619,83.786 111.850,84.238 111.909 C 84.690 111.969,85.103 112.044,85.155 
                                112.076 C 85.207 112.108,85.655 112.185,86.150 112.248 C 86.645 112.311,87.208 112.396,87.400 112.437 C 87.593 112.479,88.087 112.552,88.500 
                                112.599 C 88.912 112.647,89.625 112.758,90.083 112.845 C 90.542 112.932,91.292 113.040,91.750 113.085 C 92.208 113.130,92.808 113.204,93.083 
                                113.248 C 93.579 113.328,94.311 113.412,95.917 113.572 C 96.375 113.618,97.087 113.701,97.500 113.758 C 98.575 113.904,99.441 113.990,100.583 
                                114.062 C 101.133 114.096,101.583 114.141,101.583 114.160 C 101.583 114.180,101.921 114.219,102.333 114.248 C 102.746 114.277,103.796 114.350,104.667 
                                114.412 C 111.826 114.916,115.743 115.035,125.250 115.037 C 133.605 115.039,137.576 114.946,144.250 114.592 C 146.421 114.477,150.461 114.209,151.833 
                                114.090 C 152.642 114.019,155.068 113.838,156.417 113.748 C 156.875 113.717,157.250 113.679,157.250 113.662 C 157.250 113.646,157.550 113.607,157.917 
                                113.576 C 159.301 113.458,161.292 113.297,163.917 113.090 C 170.826 112.545,179.663 112.481,186.333 112.927 C 187.204 112.986,188.292 113.053,188.750 
                                113.078 C 189.208 113.102,189.583 113.137,189.583 113.157 C 189.583 113.176,189.958 113.217,190.417 113.248 C 192.692 113.403,194.750 113.602,194.750 
                                113.667 C 194.750 113.682,195.082 113.720,195.489 113.751 C 195.895 113.781,196.608 113.859,197.072 113.924 C 197.537 113.989,198.123 114.051,198.375 
                                114.062 C 198.627 114.073,198.833 114.120,198.833 114.167 C 198.833 114.213,199.040 114.256,199.292 114.263 C 199.769 114.276,201.008 114.436,201.583 
                                114.559 C 201.767 114.598,202.292 114.679,202.750 114.739 C 203.208 114.799,203.808 114.892,204.083 114.946 C 204.358 115.000,204.752 115.049,204.958 
                                115.055 C 205.165 115.061,205.333 115.108,205.333 115.158 C 205.333 115.209,205.502 115.255,205.708 115.261 C 206.299 115.278,207.711 115.508,207.883 
                                115.614 C 207.969 115.667,208.237 115.730,208.478 115.753 C 208.719 115.776,209.254 115.851,209.667 115.919 C 210.079 115.987,210.510 116.045,210.625 
                                116.049 C 210.740 116.053,210.833 116.103,210.833 116.161 C 210.833 116.219,211.002 116.270,211.208 116.275 C 211.680 116.285,212.622 116.446,213.541 
                                116.674 C 213.931 116.770,214.512 116.890,214.833 116.939 C 215.154 116.988,215.717 117.100,216.083 117.189 C 216.450 117.277,217.012 117.390,217.333 
                                117.439 C 217.654 117.488,218.217 117.600,218.583 117.688 C 218.950 117.776,219.539 117.883,219.893 117.925 C 220.247 117.968,220.589 118.036,220.654 
                                118.076 C 220.719 118.116,221.667 118.302,222.761 118.490 C 224.971 118.870,225.358 118.942,226.083 119.111 C 226.627 119.237,226.795 119.262,228.167 
                                119.414 C 229.115 119.519,229.750 119.621,229.750 119.668 C 229.750 119.698,230.143 119.743,231.917 119.916 C 234.264 120.145,234.815 120.171,238.333 
                                120.223 C 240.304 120.252,241.992 120.234,242.083 120.182 C 242.175 120.130,242.512 120.076,242.833 120.062 C 244.110 120.007,245.321 119.844,247.095 
                                119.490 C 247.560 119.398,248.123 119.288,248.345 119.246 C 249.201 119.084,249.447 119.026,250.417 118.752 C 258.781 116.394,266.437 112.237,276.120 
                                104.797 C 276.691 104.359,277.189 104.000,277.228 104.000 C 277.298 104.000,277.801 103.582,278.975 102.547 C 280.119 101.540,283.088 100.391,285.333 
                                100.088 C 285.563 100.057,286.087 99.980,286.500 99.917 C 286.912 99.854,287.512 99.779,287.833 99.750 C 288.154 99.721,288.417 99.684,288.417 99.667 
                                C 288.417 99.600,291.739 99.349,294.250 99.226 C 296.082 99.136,297.457 99.091,303.417 98.925 C 308.863 98.773,310.758 98.692,315.250 98.417 C 318.077 
                                98.243,318.750 98.194,318.750 98.162 C 318.750 98.146,319.050 98.109,319.417 98.079 C 319.783 98.049,320.571 97.974,321.167 97.911 C 321.762 
                                97.848,322.512 97.774,322.833 97.747 C 323.154 97.720,323.417 97.682,323.417 97.663 C 323.417 97.644,323.642 97.604,323.917 97.573 C 324.192 
                                97.542,324.792 97.468,325.250 97.410 C 325.708 97.351,326.252 97.295,326.458 97.285 C 326.665 97.275,326.833 97.219,326.833 97.161 C 326.833 
                                97.103,326.927 97.054,327.042 97.051 C 327.339 97.045,328.674 96.850,329.167 96.740 C 329.396 96.689,329.808 96.607,330.083 96.558 C 331.064 
                                96.384,333.954 95.691,336.250 95.080 C 337.533 94.739,339.071 94.351,339.667 94.218 C 340.262 94.085,340.900 93.942,341.083 93.899 C 341.267 
                                93.857,341.642 93.790,341.917 93.752 C 342.192 93.713,342.754 93.598,343.167 93.496 C 343.579 93.394,344.153 93.287,344.442 93.258 C 344.731 
                                93.230,345.042 93.160,345.133 93.104 C 345.223 93.049,345.586 92.969,345.940 92.928 C 346.294 92.886,346.771 92.815,347.000 92.770 C 347.229 
                                92.725,347.717 92.641,348.083 92.585 C 348.450 92.528,349.012 92.439,349.333 92.387 C 349.654 92.336,350.123 92.284,350.375 92.272 C 350.627 
                                92.260,350.833 92.213,350.833 92.167 C 350.833 92.120,351.040 92.072,351.292 92.059 C 351.544 92.046,352.200 91.982,352.750 91.918 C 353.300 
                                91.854,354.012 91.778,354.333 91.750 C 354.654 91.721,354.917 91.684,354.917 91.667 C 354.917 91.633,355.321 91.594,357.417 91.422 C 360.205 
                                91.192,362.046 91.130,366.083 91.127 C 370.021 91.124,371.680 91.180,375.000 91.430 C 375.779 91.489,376.754 91.556,377.167 91.580 C 377.579 
                                91.604,377.917 91.640,377.917 91.659 C 377.917 91.679,378.254 91.717,378.667 91.743 C 379.079 91.770,380.204 91.846,381.167 91.914 C 384.052 
                                92.117,386.592 92.062,388.083 91.765 C 389.186 91.545,390.600 90.749,391.364 89.917 C 391.972 89.255,391.999 89.328,390.680 88.072 C 385.501 
                                83.144,382.259 82.826,360.250 85.085 C 353.629 85.765,351.556 85.954,349.167 86.096 C 346.346 86.264,345.809 86.301,344.667 86.407 C 343.501 
                                86.516,340.977 86.648,338.167 86.747 C 337.204 86.781,335.292 86.859,333.917 86.920 C 330.590 87.069,316.751 87.074,312.667 86.927 C 310.879 
                                86.863,308.217 86.778,306.750 86.739 C 302.443 86.623,299.916 86.534,297.167 86.404 C 293.844 86.246,281.291 86.236,279.691 86.390 C 279.018 
                                86.455,278.043 86.545,277.525 86.589 C 276.295 86.696,275.374 86.827,273.917 87.102 C 273.733 87.137,273.133 87.246,272.583 87.344 C 271.160 
                                87.598,269.981 87.940,268.167 88.626 C 265.106 89.784,263.318 90.928,260.581 93.482 C 259.680 94.323,257.697 96.049,257.256 96.378 C 257.161 
                                96.449,256.858 96.697,256.583 96.929 C 254.868 98.378,251.172 100.945,248.968 102.218 C 247.255 103.207,242.930 105.264,242.197 105.439 C 241.951 
                                105.498,241.675 105.601,241.583 105.667 C 241.363 105.828,237.629 106.995,236.500 107.257 C 236.454 107.267,236.117 107.336,235.750 107.410 C 235.383 
                                107.484,234.933 107.578,234.750 107.619 C 233.194 107.970,232.034 108.158,230.750 108.265 C 230.292 108.303,229.279 108.391,228.500 108.459 C 226.045 
                                108.675,223.553 108.615,220.000 108.254 C 218.461 108.098,217.938 108.035,217.417 107.942 C 217.142 107.893,216.579 107.805,216.167 107.747 C 215.490 
                                107.652,214.089 107.384,212.250 106.997 C 209.396 106.398,202.284 104.221,198.833 102.891 C 195.094 101.450,193.985 101.008,191.667 100.040 C 190.246 
                                99.447,188.765 98.820,188.377 98.647 C 187.988 98.475,187.637 98.333,187.597 98.333 C 187.556 98.333,187.049 98.118,186.470 97.856 C 178.137 
                                94.077,167.623 89.802,161.833 87.839 C 158.772 86.801,152.811 85.160,151.167 84.903 C 150.846 84.852,150.321 84.748,150.000 84.671 C 149.679 
                                84.594,149.042 84.474,148.583 84.405 C 148.125 84.335,147.675 84.260,147.583 84.236 C 144.713 83.499,136.272 83.232,132.333 83.754 C 132.012 
                                83.797,131.450 83.869,131.083 83.916 C 130.717 83.962,130.156 84.044,129.838 84.099 C 129.520 84.154,129.070 84.217,128.838 84.241 C 128.606 
                                84.265,128.229 84.331,128.000 84.388 C 126.847 84.677,123.338 85.493,122.935 85.566 C 122.682 85.612,122.237 85.722,121.946 85.811 C 121.655 
                                85.899,121.117 86.029,120.750 86.098 C 120.383 86.167,120.046 86.236,120.000 86.250 C 119.954 86.264,119.617 86.336,119.250 86.410 C 117.871 
                                86.687,117.377 86.797,117.028 86.906 C 116.875 86.953,116.450 87.036,116.083 87.090 C 115.717 87.144,115.130 87.263,114.779 87.354 C 114.428 
                                87.445,113.865 87.555,113.529 87.598 C 112.711 87.703,112.305 87.775,110.859 88.072 C 110.186 88.210,109.586 88.313,109.526 88.301 C 109.466 
                                88.289,109.229 88.326,109.000 88.383 C 108.556 88.495,107.519 88.668,106.833 88.744 C 106.604 88.770,106.229 88.837,106.000 88.893 C 105.771 
                                88.948,105.246 89.031,104.833 89.077 C 104.421 89.122,103.907 89.196,103.691 89.240 C 103.208 89.340,101.513 89.565,99.917 89.741 C 99.550 
                                89.782,98.950 89.860,98.583 89.915 C 97.745 90.040,96.636 90.166,95.667 90.246 C 95.254 90.280,94.579 90.354,94.167 90.409 C 93.038 90.561,91.921 
                                90.660,90.255 90.758 C 89.427 90.807,88.412 90.878,88.000 90.917 C 83.612 91.330,72.705 91.328,69.333 90.913 C 68.921 90.863,68.171 90.790,67.667 
                                90.752 C 65.743 90.607,64.733 90.500,64.250 90.391 C 63.975 90.329,63.563 90.259,63.333 90.237 C 62.337 90.137,61.231 89.987,61.000 89.919 C 60.862 
                                89.878,60.506 89.805,60.208 89.756 C 58.937 89.546,58.543 89.472,57.833 89.310 C 57.421 89.216,56.941 89.110,56.768 89.075 C 50.413 87.775,42.924 
                                84.324,38.417 80.619 C 35.874 78.528,33.608 75.614,34.125 75.098 C 34.178 75.044,34.146 75.000,34.053 75.000 C 33.797 75.000,33.977 73.698,34.355 
                                72.820 C 34.862 71.642,37.264 69.484,40.606 67.205 C 40.777 67.088,41.615 66.488,42.469 65.872 C 43.323 65.255,44.368 64.502,44.793 64.199 C 48.160 
                                61.793,52.612 57.387,55.099 54.000 C 56.790 51.697,58.779 48.227,59.990 45.467 C 60.179 45.037,60.333 44.650,60.333 44.606 C 60.333 44.563,60.495 
                                44.165,60.693 43.722 C 60.890 43.279,61.075 42.842,61.102 42.750 C 61.130 42.658,61.457 41.608,61.828 40.417 C 62.199 39.225,62.533 38.100,62.570 
                                37.917 C 62.608 37.733,62.726 37.208,62.833 36.750 C 62.940 36.292,63.058 35.767,63.094 35.583 C 63.131 35.400,63.199 35.063,63.244 34.833 C 63.290 
                                34.604,63.366 34.192,63.412 33.917 C 63.459 33.642,63.539 33.229,63.591 33.000 C 63.677 32.615,63.761 32.023,63.909 30.750 C 63.941 30.475,64.017 
                                29.875,64.078 29.417 C 64.138 28.958,64.213 28.199,64.244 27.730 L 64.301 26.876 63.692 27.012 C 61.714 27.452,60.535 27.560,57.667 27.560 C 54.699 
                                27.560,53.457 27.438,51.167 26.923 C 50.938 26.872,50.558 26.795,50.323 26.751 C 49.720 26.641,46.016 25.513,45.417 25.258 C 45.142 25.141,44.617 
                                24.930,44.250 24.789 C 42.911 24.273,40.066 23.118,39.417 22.827 C 36.137 21.354,31.461 19.707,29.667 19.391 C 29.438 19.351,29.063 19.284,28.833 
                                19.242 C 26.572 18.830,22.573 19.077,20.678 19.746 C 19.749 20.074,19.750 20.076,20.184 18.812 C 21.326 15.490,23.883 10.556,26.502 6.625 C 27.220 
                                5.548,27.794 4.672,27.778 4.679 C 27.763 4.686,27.300 4.861,26.750 5.068"
                            ></path>
                        </g>
                    </svg>
                </span>
                <h1
                    css-flex='justify_content_center'
                    css-color='text'
                    css-text='karla 44_px 800 center'
                    class='header_club_name_container'
                >
                    ${club_name}
                </h1>
                <p
                    css-color='text_darkmode'
                    css-text='poppins uppercase 20_px end'
                >
                    sportclub
                </p>
            </div>
            <ul
                css-list=''
                css-flex='align_items_center gap_2_rem justify_content_baseline'
                css-color='text_counter'
                css-text='acme uppercase 22_px 500'
            >
                <li
                    onmouseover='mouseOver()'
                    onmouseout='mouseOut()'
                    class="hoverable_text"
                >
                    Home
                </li>
                <li
                    onmouseover='mouseOver()'
                    onmouseout='mouseOut()'
                    class="hoverable_text"
                >
                    Training
                </li>
                <li
                    onmouseover='mouseOver()'
                    onmouseout='mouseOut()'
                    class="hoverable_text"
                >
                    About Us
                </li>
            </ul>
        </div>
    `;
}