import React from "react";

const IconDefs = {
  save: (props) => (
    <svg version="1.1" id="save" viewBox="0 0 49 49" {...props}>
      <g>
        <path
          d="M39.914,0H37.5h-28h-9v49h7h33h8V8.586L39.914,0z M35.5,2v14h-24V2H35.5z M9.5,47V28h29v19H9.5z M46.5,47h-6V26h-33v21h-5
        V2h7v16h28V2h1.586L46.5,9.414V47z"
        />
        <path d="M13.5,33h7c0.553,0,1-0.447,1-1s-0.447-1-1-1h-7c-0.553,0-1,0.447-1,1S12.947,33,13.5,33z" />
        <path d="M23.5,35h-10c-0.553,0-1,0.447-1,1s0.447,1,1,1h10c0.553,0,1-0.447,1-1S24.053,35,23.5,35z" />
        <path
          d="M25.79,35.29c-0.181,0.189-0.29,0.45-0.29,0.71s0.109,0.52,0.29,0.71C25.979,36.89,26.229,37,26.5,37
        c0.26,0,0.52-0.11,0.71-0.29c0.18-0.19,0.29-0.45,0.29-0.71s-0.11-0.521-0.29-0.71C26.84,34.92,26.16,34.92,25.79,35.29z"
        />
        <path d="M33.5,4h-6v10h6V4z M31.5,12h-2V6h2V12z" />
      </g>
    </svg>
  ),
  "page-arrow-right": (props) => (
    <svg {...props} id="page-arrow-right" viewBox="0 0 39.88 40">
      <path
        d="M36.88,1a2,2,0,0,1,2,2V37a2,2,0,0,1-2,2H3a2,2,0,0,1-2-2V3A2,2,0,0,1,3,1H36.88m0-1H3A3,3,0,0,0,0,3V37a3,3,0,0,0,3,3H36.88a3,3,0,0,0,3-3V3a3,3,0,0,0-3-3h0Z"
        transform="translate(0)"
      />
      <polygon points="24.94 20.05 16.44 28.45 14.94 26.95 21.84 20.05 14.94 13.15 16.44 11.55 24.94 20.05" />
    </svg>
  ),
  "arrow-right": (props) => (
    <svg {...props} version="1.1" id="Layer_1" viewBox="0 0 492.004 492.004">
      <g>
        <g>
          <path
            d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
                c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
                c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
                c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"
          />
        </g>
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  ),
  "notification-bell": (props) => (
    <svg
      {...props}
      id="Capa_1"
      enable-background="new 0 0 512 512"
      viewBox="0 0 512 512"
    >
      <path d="m450.201 407.453c-1.505-.977-12.832-8.912-24.174-32.917-20.829-44.082-25.201-106.18-25.201-150.511 0-.193-.004-.384-.011-.576-.227-58.589-35.31-109.095-85.514-131.756v-34.657c0-31.45-25.544-57.036-56.942-57.036h-4.719c-31.398 0-56.942 25.586-56.942 57.036v34.655c-50.372 22.734-85.525 73.498-85.525 132.334 0 44.331-4.372 106.428-25.201 150.511-11.341 24.004-22.668 31.939-24.174 32.917-6.342 2.935-9.469 9.715-8.01 16.586 1.473 6.939 7.959 11.723 15.042 11.723h109.947c.614 42.141 35.008 76.238 77.223 76.238s76.609-34.097 77.223-76.238h109.947c7.082 0 13.569-4.784 15.042-11.723 1.457-6.871-1.669-13.652-8.011-16.586zm-223.502-350.417c0-14.881 12.086-26.987 26.942-26.987h4.719c14.856 0 26.942 12.106 26.942 26.987v24.917c-9.468-1.957-19.269-2.987-29.306-2.987-10.034 0-19.832 1.029-29.296 2.984v-24.914zm29.301 424.915c-25.673 0-46.614-20.617-47.223-46.188h94.445c-.608 25.57-21.549 46.188-47.222 46.188zm60.4-76.239c-.003 0-213.385 0-213.385 0 2.595-4.044 5.236-8.623 7.861-13.798 20.104-39.643 30.298-96.129 30.298-167.889 0-63.417 51.509-115.01 114.821-115.01s114.821 51.593 114.821 115.06c0 .185.003.369.01.553.057 71.472 10.25 127.755 30.298 167.286 2.625 5.176 5.267 9.754 7.861 13.798z" />
    </svg>
  ),
  search: (props) => (
    <svg {...props} viewBox="0 0 32 32">
      <path d="M 19 3 C 13.488281 3 9 7.488281 9 13 C 9 15.394531 9.839844 17.589844 11.25 19.3125 L 3.28125 27.28125 L 4.71875 28.71875 L 12.6875 20.75 C 14.410156 22.160156 16.605469 23 19 23 C 24.511719 23 29 18.511719 29 13 C 29 7.488281 24.511719 3 19 3 Z M 19 5 C 23.429688 5 27 8.570313 27 13 C 27 17.429688 23.429688 21 19 21 C 14.570313 21 11 17.429688 11 13 C 11 8.570313 14.570313 5 19 5 Z" />
    </svg>
  ),
  "user-avatar": (props) => (
    <svg {...props} viewBox="-42 0 512 512.001">
      <path d="m210.351562 246.632812c33.882813 0 63.21875-12.152343 87.195313-36.128906 23.96875-23.972656 36.125-53.304687 36.125-87.191406 0-33.875-12.152344-63.210938-36.128906-87.191406-23.976563-23.96875-53.3125-36.121094-87.191407-36.121094-33.886718 0-63.21875 12.152344-87.191406 36.125s-36.128906 53.308594-36.128906 87.1875c0 33.886719 12.15625 63.222656 36.128906 87.195312 23.980469 23.96875 53.316406 36.125 87.191406 36.125zm-65.972656-189.292968c18.394532-18.394532 39.972656-27.335938 65.972656-27.335938 25.996094 0 47.578126 8.941406 65.976563 27.335938 18.394531 18.398437 27.339844 39.980468 27.339844 65.972656 0 26-8.945313 47.578125-27.339844 65.976562-18.398437 18.398438-39.980469 27.339844-65.976563 27.339844-25.992187 0-47.570312-8.945312-65.972656-27.339844-18.398437-18.394531-27.34375-39.976562-27.34375-65.976562 0-25.992188 8.945313-47.574219 27.34375-65.972656zm0 0" />
      <path d="m426.128906 393.703125c-.691406-9.976563-2.089844-20.859375-4.148437-32.351563-2.078125-11.578124-4.753907-22.523437-7.957031-32.527343-3.3125-10.339844-7.808594-20.550781-13.375-30.335938-5.769532-10.15625-12.550782-19-20.160157-26.277343-7.957031-7.613282-17.699219-13.734376-28.964843-18.199219-11.226563-4.441407-23.667969-6.691407-36.976563-6.691407-5.226563 0-10.28125 2.144532-20.042969 8.5-6.007812 3.917969-13.035156 8.449219-20.878906 13.460938-6.707031 4.273438-15.792969 8.277344-27.015625 11.902344-10.949219 3.542968-22.066406 5.339844-33.042969 5.339844-10.96875 0-22.085937-1.796876-33.042968-5.339844-11.210938-3.621094-20.300782-7.625-26.996094-11.898438-7.769532-4.964844-14.800782-9.496094-20.898438-13.46875-9.753906-6.355468-14.808594-8.5-20.035156-8.5-13.3125 0-25.75 2.253906-36.972656 6.699219-11.257813 4.457031-21.003906 10.578125-28.96875 18.199219-7.609375 7.28125-14.390625 16.121094-20.15625 26.273437-5.558594 9.785157-10.058594 19.992188-13.371094 30.339844-3.199219 10.003906-5.875 20.945313-7.953125 32.523437-2.0625 11.476563-3.457031 22.363282-4.148437 32.363282-.679688 9.777344-1.023438 19.953125-1.023438 30.234375 0 26.726562 8.496094 48.363281 25.25 64.320312 16.546875 15.746094 38.4375 23.730469 65.066406 23.730469h246.53125c26.621094 0 48.511719-7.984375 65.0625-23.730469 16.757813-15.945312 25.253906-37.589843 25.253906-64.324219-.003906-10.316406-.351562-20.492187-1.035156-30.242187zm-44.90625 72.828125c-10.933594 10.40625-25.449218 15.464844-44.378906 15.464844h-246.527344c-18.933594 0-33.449218-5.058594-44.378906-15.460938-10.722656-10.207031-15.933594-24.140625-15.933594-42.585937 0-9.59375.316406-19.066407.949219-28.160157.617187-8.921874 1.878906-18.722656 3.75-29.136718 1.847656-10.285156 4.199219-19.9375 6.996094-28.675782 2.683593-8.378906 6.34375-16.675781 10.882812-24.667968 4.332031-7.617188 9.316407-14.152344 14.816407-19.417969 5.144531-4.925781 11.628906-8.957031 19.269531-11.980469 7.066406-2.796875 15.007812-4.328125 23.628906-4.558594 1.050781.558594 2.921875 1.625 5.953125 3.601563 6.167969 4.019531 13.277344 8.605469 21.136719 13.625 8.859375 5.648437 20.273437 10.75 33.910156 15.152344 13.941406 4.507812 28.160156 6.796875 42.273437 6.796875 14.113282 0 28.335938-2.289063 42.269532-6.792969 13.648437-4.410156 25.058594-9.507813 33.929687-15.164063 8.042969-5.140624 14.953125-9.59375 21.121094-13.617187 3.03125-1.972656 4.902344-3.042969 5.953125-3.601563 8.625.230469 16.566406 1.761719 23.636719 4.558594 7.636719 3.023438 14.121093 7.058594 19.265625 11.980469 5.5 5.261719 10.484375 11.796875 14.816406 19.421875 4.542969 7.988281 8.207031 16.289062 10.886719 24.660156 2.800781 8.75 5.15625 18.398438 7 28.675782 1.867187 10.433593 3.132812 20.238281 3.75 29.144531v.007812c.636719 9.058594.957031 18.527344.960937 28.148438-.003906 18.449219-5.214844 32.378906-15.9375 42.582031zm0 0" />
    </svg>
  ),
  "arrow-down": (props) => (
    <svg
      {...props}
      viewBox="0 0 24 24"
      focusable="false"
      aria-hidden="true"
      role="presentation"
    >
      <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
      <path fill="none" d="M0 0h24v24H0z" />
    </svg>
  ),
  "grid-icon": (props) => (
    <svg {...props} viewBox="-19 -19 600 600">
      <path d="m251.25 12.5c0-6.90625-5.59375-12.5-12.5-12.5h-226.25c-6.90625 0-12.5 5.59375-12.5 12.5v226.25c0 6.90625 5.59375 12.5 12.5 12.5h226.25c6.90625 0 12.5-5.59375 12.5-12.5zm-25 213.75h-201.25v-201.25h201.25zm0 0" />
      <path d="m562.5 12.5c0-6.90625-5.59375-12.5-12.5-12.5h-226.25c-6.90625 0-12.5 5.59375-12.5 12.5v226.25c0 6.90625 5.59375 12.5 12.5 12.5h226.25c6.90625 0 12.5-5.59375 12.5-12.5zm-25 213.75h-201.25v-201.25h201.25zm0 0" />
      <path d="m251.25 323.75c0-6.90625-5.59375-12.5-12.5-12.5h-226.25c-6.90625 0-12.5 5.59375-12.5 12.5v226.25c0 6.90625 5.59375 12.5 12.5 12.5h226.25c6.90625 0 12.5-5.59375 12.5-12.5zm-25 212.5h-201.25v-200h201.25zm0 0" />
      <path d="m562.5 323.75c0-6.90625-5.59375-12.5-12.5-12.5h-226.25c-6.90625 0-12.5 5.59375-12.5 12.5v226.25c0 6.90625 5.59375 12.5 12.5 12.5h226.25c6.90625 0 12.5-5.59375 12.5-12.5zm-25 212.5h-201.25v-200h201.25zm0 0" />
    </svg>
  ),
  "pie-chart": (props) => (
    <svg {...props} version="1.1" id="Capa_1" viewBox="0 0 480 480">
      <g>
        <g>
          <path
            d="M440,248H232V40c0-4.418-3.582-8-8-8C100.288,32,0,132.288,0,256s100.288,224,224,224s224-100.288,224-224
           C448,251.582,444.418,248,440,248z M224,464c-114.875,0.027-208.022-93.075-208.05-207.95
           C15.924,144.249,104.281,52.425,216,48.152V256c0,4.418,3.582,8,8,8h207.848C427.415,375.62,335.708,463.865,224,464z"
          />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M256,0c-4.418,0-8,3.582-8,8v216c0,4.418,3.582,8,8,8h216c4.418,0,8-3.582,8-8C479.859,100.347,379.653,0.141,256,0z
            M264,216V16.152C372.534,20.471,459.529,107.466,463.848,216H264z"
          />
        </g>
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  ),
  calendar: (props) => (
    <svg {...props} version="1.1" id="Capa_1" viewBox="0 0 428.934 428.934">
      <g>
        <g>
          <g>
            <path
              d="M423.446,382.433V83.069c0.584-24.808-19.053-45.392-43.861-45.975c-0.705-0.017-1.41-0.017-2.115,0h-53.29V10.449
               C324.181,4.678,319.503,0,313.732,0s-10.449,4.678-10.449,10.449v26.645H125.65V10.449C125.65,4.678,120.972,0,115.201,0
               s-10.449,4.678-10.449,10.449v26.645h-53.29C26.655,36.51,6.071,56.147,5.487,80.955c-0.017,0.705-0.017,1.41,0,2.115v299.363
               c-0.579,25.096,19.297,45.91,44.393,46.489c0.527,0.012,1.055,0.015,1.583,0.009h326.008
               c25.101,0.295,45.689-19.814,45.984-44.915C423.462,383.488,423.459,382.96,423.446,382.433z M49.325,57.992
               c0.712-0.032,1.425-0.032,2.137,0h53.29v26.122c0,5.771,4.678,10.449,10.449,10.449s10.449-4.678,10.449-10.449V57.992h177.633
               v26.122c0,5.771,4.678,10.449,10.449,10.449s10.449-4.678,10.449-10.449V57.992h53.29c13.26-0.59,24.487,9.68,25.078,22.94
               c0.032,0.712,0.032,1.425,0,2.137v42.841H26.385V83.069C25.795,69.81,36.066,58.582,49.325,57.992z M379.067,408.016
               c-0.532,0.023-1.064,0.028-1.596,0.016H51.463c-13.558,0.301-24.793-10.446-25.094-24.004c-0.012-0.532-0.006-1.064,0.016-1.596
               V146.808h376.163v235.625C403.129,395.982,392.616,407.436,379.067,408.016z"
            />
            <path
              d="M106.32,189.649C106.32,189.649,106.32,189.649,106.32,189.649c-22.795,0-41.273,18.479-41.273,41.273
               c0,22.795,18.479,41.273,41.273,41.273c22.795,0,41.273-18.479,41.273-41.273S129.115,189.649,106.32,189.649z M107.379,251.298
               c-0.353,0.009-0.706,0.009-1.059,0c-10.961,0.292-20.083-8.356-20.375-19.316c-0.009-0.353-0.009-0.706,0-1.059
               c0-11.253,9.122-20.376,20.375-20.376c11.253,0,20.376,9.122,20.376,20.376C126.988,241.883,118.34,251.006,107.379,251.298z"
            />
            <path
              d="M214.467,189.649c-22.795,0-41.273,18.479-41.273,41.273c0,22.795,18.479,41.273,41.273,41.273
               s41.273-18.479,41.273-41.273S237.262,189.649,214.467,189.649z M215.526,251.298c-0.353,0.009-0.706,0.009-1.059,0
               c-10.961,0.292-20.083-8.356-20.376-19.316c-0.009-0.353-0.009-0.706,0-1.059c0.006-11.253,9.133-20.371,20.386-20.365
               c11.245,0.006,20.359,9.12,20.365,20.365C235.135,241.883,226.486,251.006,215.526,251.298z"
            />
            <path
              d="M322.614,189.649c-22.795,0-41.273,18.479-41.273,41.273c0,22.795,18.479,41.273,41.273,41.273
               c22.795,0,41.273-18.479,41.273-41.273S345.408,189.649,322.614,189.649z M323.673,251.298c-0.353,0.009-0.706,0.009-1.059,0
               c-10.961,0.292-20.083-8.356-20.375-19.316c-0.009-0.353-0.009-0.706,0-1.059c0-11.253,9.122-20.376,20.375-20.376
               s20.376,9.122,20.376,20.376C343.282,241.883,334.633,251.006,323.673,251.298z"
            />
            <path
              d="M107.372,282.122c-0.351-0.005-0.701-0.005-1.052,0c-22.795,0-41.273,18.479-41.273,41.273s18.479,41.273,41.273,41.273
               c22.795,0,41.273-18.479,41.273-41.273C147.884,300.892,129.876,282.413,107.372,282.122z M126.695,323.396
               c0.004,10.965-8.882,19.856-19.846,19.86c-0.176,0-0.353-0.002-0.529-0.007c-11.253-0.004-20.372-9.129-20.369-20.382
               c0.004-11.253,9.129-20.372,20.382-20.369c11.253,0.004,20.372,9.129,20.369,20.382
               C126.702,323.052,126.7,323.224,126.695,323.396z"
            />
            <path
              d="M215.518,282.122c-0.351-0.005-0.701-0.005-1.052,0c-22.795,0-41.273,18.479-41.273,41.273s18.479,41.273,41.273,41.273
               s41.273-18.479,41.273-41.273C256.031,300.892,238.023,282.413,215.518,282.122z M234.842,323.396
               c0.004,10.965-8.882,19.856-19.846,19.86c-0.177,0-0.353-0.002-0.529-0.007c-11.253-0.004-20.372-9.129-20.369-20.382
               c0.004-11.253,9.129-20.372,20.382-20.369c11.253,0.004,20.372,9.129,20.369,20.382
               C234.849,323.052,234.847,323.224,234.842,323.396z"
            />
            <path
              d="M323.665,282.122c-0.351-0.005-0.701-0.005-1.052,0c-22.795,0-41.273,18.479-41.273,41.273s18.479,41.273,41.273,41.273
               c22.795,0,41.273-18.479,41.273-41.273C364.178,300.892,346.17,282.413,323.665,282.122z M342.989,323.396
               c0.004,10.965-8.882,19.856-19.846,19.86c-0.176,0-0.353-0.002-0.529-0.007c-11.253-0.004-20.372-9.129-20.369-20.382
               c0.004-11.253,9.129-20.372,20.382-20.369c11.253,0.004,20.373,9.129,20.369,20.382
               C342.996,323.052,342.994,323.224,342.989,323.396z"
            />
          </g>
        </g>
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  ),
  message: (props) => (
    <svg
      {...props}
      id="Capa_1"
      enable-background="new 0 0 512 512"
      viewBox="0 0 512 512"
    >
      <g>
        <g>
          <path d="m393.926 237.559c0-93.502-98.562-154.79-196.963-154.79-98.794 0-196.963 61.576-196.963 154.79 0 35.265 15.445 69.75 43.491 97.104 1.073 1.047 1.484 2.636 1.072 4.146-8.809 32.271-29.673 61.423-38.234 72.459-2.663 3.433-3.101 7.973-1.142 11.85 1.915 3.791 5.701 6.113 9.931 6.113.096 0 .191-.001.287-.003 41.893-1.045 90.452-12.869 120.468-42.379 1.049-1.032 2.554-1.44 4.028-1.089 18.442 4.374 37.641 6.591 57.062 6.591 98.765-.002 196.963-61.553 196.963-154.792zm-250.564 133.604c-6.521-1.549-13.254.317-18.005 4.988-30.017 29.513-79.032 36.222-102.235 37.713 10.599-14.631 27.832-41.502 35.912-71.106 1.847-6.766-.096-13.982-5.07-18.834-25.49-24.861-38.964-54.726-38.964-86.365 0-77.08 81.628-139.79 181.963-139.79s181.963 62.709 181.963 139.79-81.628 139.79-181.963 139.79c-18.257 0-36.29-2.082-53.601-6.186z" />
          <path d="m442.165 362.18c43.729-22.099 69.835-59.764 69.835-100.754 0-57.931-52.367-107.431-124.518-117.702-4.095-.582-7.898 2.267-8.481 6.368-.584 4.101 2.267 7.898 6.368 8.482 64.684 9.208 111.631 52.463 111.631 102.852 0 35.212-23.028 67.873-61.601 87.367-7.5 3.791-11.519 12.171-9.772 20.381 3.657 17.185 11.442 33.098 17.669 43.884-44.291-7.372-61.078-28.624-66.386-37.822-3.277-5.678-9.405-9.198-16.018-9.198-.02 0-.039 0-.058 0l-.55.001c-8.317 0-16.645-.577-24.75-1.716-4.091-.575-7.894 2.282-8.47 6.384s2.282 7.894 6.384 8.47c8.794 1.235 17.823 1.861 26.836 1.861l.61-.001h.011c1.255 0 2.407.649 3.012 1.696 20.313 35.203 67.008 44.191 86.141 46.421 4.226.492 8.252-1.439 10.507-5.05 2.249-3.603 2.221-8.063-.075-11.64-5.763-8.976-16.048-26.94-20.191-46.412-.331-1.556.436-3.149 1.866-3.872z" />
          <path d="m80.258 210.733c-14.333 0-25.993 11.661-25.993 25.993s11.66 25.993 25.993 25.993 25.993-11.661 25.993-25.993-11.66-25.993-25.993-25.993zm0 36.987c-6.062 0-10.993-4.932-10.993-10.993s4.932-10.993 10.993-10.993 10.993 4.932 10.993 10.993-4.932 10.993-10.993 10.993z" />
          <path d="m154.411 210.733c-14.333 0-25.993 11.661-25.993 25.993s11.66 25.993 25.993 25.993 25.993-11.661 25.993-25.993-11.66-25.993-25.993-25.993zm0 36.987c-6.062 0-10.993-4.932-10.993-10.993s4.932-10.993 10.993-10.993 10.993 4.932 10.993 10.993-4.931 10.993-10.993 10.993z" />
          <path d="m228.563 210.733c-14.333 0-25.993 11.661-25.993 25.993s11.66 25.993 25.993 25.993 25.993-11.661 25.993-25.993-11.66-25.993-25.993-25.993zm0 36.987c-6.062 0-10.993-4.932-10.993-10.993s4.932-10.993 10.993-10.993 10.993 4.932 10.993 10.993-4.931 10.993-10.993 10.993z" />
          <path d="m302.717 210.733c-14.333 0-25.993 11.661-25.993 25.993s11.66 25.993 25.993 25.993 25.993-11.661 25.993-25.993-11.66-25.993-25.993-25.993zm0 36.987c-6.062 0-10.993-4.932-10.993-10.993s4.932-10.993 10.993-10.993 10.993 4.932 10.993 10.993-4.932 10.993-10.993 10.993z" />
        </g>
      </g>
    </svg>
  ),
  logout: (props) => (
    <svg {...props} version="1.1" id="Capa_1" viewBox="0 0 512 512">
      <g>
        <g>
          <path
            d="M360.233,121.189c11.046,0,20-8.954,20-20V49.378C380.233,22.151,357.837,0,330.31,0H90.923C63.396,0,41,22.151,41,49.378
			v413.244C41,489.849,63.396,512,90.923,512H330.31c27.527,0,49.923-22.151,49.923-49.378v-51.811c0-11.045-8.955-19.999-20-19.999
			c-11.046,0-20,8.954-20,20v51.811c0,5.171-4.451,9.378-9.923,9.378H90.923c-5.472,0-9.923-4.207-9.923-9.378V49.378
			C81,44.207,85.451,40,90.923,40H330.31c5.472,0,9.923,4.207,9.923,9.378v51.811C340.233,112.235,349.187,121.189,360.233,121.189z
			"
          />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M464.963,241.682L358.521,137.881c-7.908-7.713-20.571-7.554-28.281,0.355c-7.712,7.907-7.553,20.57,0.355,28.281
			L401.845,236H210.616c-11.046,0-20,8.954-20,20s8.954,20,20,20h191.229l-71.25,69.482c-7.908,7.711-8.067,20.374-0.355,28.281
			c7.709,7.907,20.373,8.07,28.281,0.355l106.442-103.801C473.061,262.436,472.963,249.469,464.963,241.682z"
          />
        </g>
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  ),
  acceptTick: (props) => (
    <svg {...props} version="1.1" id="Layer_1" viewBox="0 0 512 512">
      <ellipse
        style={{ fill: "#32BEA6" }}
        cx="256"
        cy="256"
        rx="256"
        ry="255.832"
      />
      <polygon
        style={{ fill: "#FFFFF" }}
        points="235.472,392.08 114.432,297.784 148.848,253.616 223.176,311.52 345.848,134.504 
	391.88,166.392 "
      />
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  ),
  cancel: (props) => (
    <svg {...props} version="1.1" id="Layer_1" viewBox="0 0 512 512">
      <ellipse
        style={{ fill: "#E04F5F" }}
        cx="256"
        cy="256"
        rx="256"
        ry="255.832"
      />
      <g transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 77.26 32)">
        <rect
          x="3.98"
          y="-427.615"
          style={{ fill: "#fffff" }}
          width="55.992"
          height="285.672"
        />
        <rect
          x="-110.828"
          y="-312.815"
          style={{ fill: "#fffff" }}
          width="285.672"
          height="55.992"
        />
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  ),
  editIcon: (props) => (
    <svg {...props} viewBox="0 -1 401.52289 401">
      <path d="m370.589844 250.972656c-5.523438 0-10 4.476563-10 10v88.789063c-.019532 16.5625-13.4375 29.984375-30 30h-280.589844c-16.5625-.015625-29.980469-13.4375-30-30v-260.589844c.019531-16.558594 13.4375-29.980469 30-30h88.789062c5.523438 0 10-4.476563 10-10 0-5.519531-4.476562-10-10-10h-88.789062c-27.601562.03125-49.96875 22.398437-50 50v260.59375c.03125 27.601563 22.398438 49.96875 50 50h280.589844c27.601562-.03125 49.96875-22.398437 50-50v-88.792969c0-5.523437-4.476563-10-10-10zm0 0" />
      <path d="m376.628906 13.441406c-17.574218-17.574218-46.066406-17.574218-63.640625 0l-178.40625 178.40625c-1.222656 1.222656-2.105469 2.738282-2.566406 4.402344l-23.460937 84.699219c-.964844 3.472656.015624 7.191406 2.5625 9.742187 2.550781 2.546875 6.269531 3.527344 9.742187 2.566406l84.699219-23.464843c1.664062-.460938 3.179687-1.34375 4.402344-2.566407l178.402343-178.410156c17.546875-17.585937 17.546875-46.054687 0-63.640625zm-220.257812 184.90625 146.011718-146.015625 47.089844 47.089844-146.015625 146.015625zm-9.40625 18.875 37.621094 37.625-52.039063 14.417969zm227.257812-142.546875-10.605468 10.605469-47.09375-47.09375 10.609374-10.605469c9.761719-9.761719 25.589844-9.761719 35.351563 0l11.738281 11.734375c9.746094 9.773438 9.746094 25.589844 0 35.359375zm0 0" />
    </svg>
  ),
};

export default IconDefs;
