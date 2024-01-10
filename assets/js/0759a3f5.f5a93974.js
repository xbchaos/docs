"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[2409],{3754:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>h,toc:()=>a});var r=t(5893),n=t(1151);const i={hide_table_of_contents:!0},l="v1.29.X",h={id:"release-notes/v1.29.X",title:"v1.29.X",description:"Before upgrading from earlier releases, be sure to read the Kubernetes Urgent Upgrade Notes.",source:"@site/docs/release-notes/v1.29.X.md",sourceDirName:"release-notes",slug:"/release-notes/v1.29.X",permalink:"/release-notes/v1.29.X",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/release-notes/v1.29.X.md",tags:[],version:"current",lastUpdatedAt:1704919175,formattedLastUpdatedAt:"Jan 10, 2024",frontMatter:{hide_table_of_contents:!0},sidebar:"mySidebar",previous:{title:"v1.28.X",permalink:"/release-notes/v1.28.X"},next:{title:"Related Projects",permalink:"/related-projects"}},d={},a=[{value:"Release v1.29.0+k3s1",id:"release-v1290k3s1",level:2},{value:"Changes since v1.28.4+k3s2:",id:"changes-since-v1284k3s2",level:3}];function o(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"v129x",children:"v1.29.X"}),"\n",(0,r.jsx)(s.admonition,{title:"Upgrade Notice",type:"warning",children:(0,r.jsxs)(s.p,{children:["Before upgrading from earlier releases, be sure to read the Kubernetes ",(0,r.jsx)(s.a,{href:"https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.29.md#urgent-upgrade-notes",children:"Urgent Upgrade Notes"}),"."]})}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Version"}),(0,r.jsx)(s.th,{children:"Release date"}),(0,r.jsx)(s.th,{children:"Kubernetes"}),(0,r.jsx)(s.th,{children:"Kine"}),(0,r.jsx)(s.th,{children:"SQLite"}),(0,r.jsx)(s.th,{children:"Etcd"}),(0,r.jsx)(s.th,{children:"Containerd"}),(0,r.jsx)(s.th,{children:"Runc"}),(0,r.jsx)(s.th,{children:"Flannel"}),(0,r.jsx)(s.th,{children:"Metrics-server"}),(0,r.jsx)(s.th,{children:"Traefik"}),(0,r.jsx)(s.th,{children:"CoreDNS"}),(0,r.jsx)(s.th,{children:"Helm-controller"}),(0,r.jsx)(s.th,{children:"Local-path-provisioner"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/release-notes/v1.29.X#release-v1290k3s1",children:"v1.29.0+k3s1"})}),(0,r.jsx)(s.td,{children:"Dec 22 2023"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.29.md#v1290",children:"v1.29.0"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://github.com/k3s-io/kine/releases/tag/v0.11.0",children:"v0.11.0"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://sqlite.org/releaselog/3_42_0.html",children:"3.42.0"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://github.com/k3s-io/etcd/releases/tag/v3.5.9-k3s1",children:"v3.5.9-k3s1"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://github.com/k3s-io/containerd/releases/tag/v1.7.11-k3s2",children:"v1.7.11-k3s2"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://github.com/opencontainers/runc/releases/tag/v1.1.10",children:"v1.1.10"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://github.com/flannel-io/flannel/releases/tag/v0.24.0",children:"v0.24.0"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://github.com/kubernetes-sigs/metrics-server/releases/tag/v0.6.3",children:"v0.6.3"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://github.com/traefik/traefik/releases/tag/v2.10.5",children:"v2.10.5"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://github.com/coredns/coredns/releases/tag/v1.10.1",children:"v1.10.1"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://github.com/k3s-io/helm-controller/releases/tag/v0.15.4",children:"v0.15.4"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://github.com/rancher/local-path-provisioner/releases/tag/v0.0.24",children:"v0.0.24"})})]})})]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(s.h2,{id:"release-v1290k3s1",children:["Release ",(0,r.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/releases/tag/v1.29.0+k3s1",children:"v1.29.0+k3s1"})]}),"\n",(0,r.jsx)(s.p,{children:"This release is K3S's first in the v1.29 line. This release updates Kubernetes to v1.29.0."}),"\n",(0,r.jsxs)(s.p,{children:["Before upgrading from earlier releases, be sure to read the Kubernetes ",(0,r.jsx)(s.a,{href:"https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.29.md#urgent-upgrade-notes",children:"Urgent Upgrade Notes"}),"."]}),"\n",(0,r.jsx)(s.admonition,{title:"Important",type:"warning",children:(0,r.jsxs)(s.p,{children:["This release removes the expiremental ",(0,r.jsx)(s.code,{children:"rotate-keys"})," subcommand due to changes in Kubernetes upstream for ",(0,r.jsx)(s.a,{href:"https://github.com/kubernetes/kubernetes/issues/117728",children:"KMSv2"}),", the subcommand should be added back in future releases."]})}),"\n",(0,r.jsx)(s.admonition,{title:"Important",type:"warning",children:(0,r.jsxs)(s.p,{children:["This release also removes the ",(0,r.jsx)(s.code,{children:"multi-cluster-cidr"})," flag, since the support for this alpha feature has been removed completely from ",(0,r.jsx)(s.a,{href:"https://groups.google.com/g/kubernetes-sig-network/c/nts1xEZ--gQ/m/2aTOUNFFAAAJ",children:"Kubernetes upstream"}),", this flag should be removed from the configuration before upgrade."]})}),"\n",(0,r.jsx)(s.h3,{id:"changes-since-v1284k3s2",children:"Changes since v1.28.4+k3s2:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Fix overlapping address range ",(0,r.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/8913",children:"(#8913)"})]}),"\n",(0,r.jsxs)(s.li,{children:["Modify CONTRIBUTING.md guide ",(0,r.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/8954",children:"(#8954)"})]}),"\n",(0,r.jsxs)(s.li,{children:["Nov 2023 stable channel update ",(0,r.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9022",children:"(#9022)"})]}),"\n",(0,r.jsxs)(s.li,{children:["Default runtime and runtime classes for wasm/nvidia/crun ",(0,r.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/8936",children:"(#8936)"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Added runtime classes for wasm/nvidia/crun"}),"\n",(0,r.jsx)(s.li,{children:"Added default runtime flag for containerd"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["Bump containerd/runc to v1.7.10-k3s1/v1.1.10 ",(0,r.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/8962",children:"(#8962)"})]}),"\n",(0,r.jsxs)(s.li,{children:["Allow setting default-runtime on servers ",(0,r.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9027",children:"(#9027)"})]}),"\n",(0,r.jsxs)(s.li,{children:["Bump containerd to v1.7.11 ",(0,r.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9040",children:"(#9040)"})]}),"\n",(0,r.jsxs)(s.li,{children:["Remove GA feature-gates ",(0,r.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/8970",children:"(#8970)"})]}),"\n",(0,r.jsxs)(s.li,{children:["Only publish to code_cov on merged E2E builds ",(0,r.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9051",children:"(#9051)"})]}),"\n",(0,r.jsxs)(s.li,{children:["Update Kubernetes to v1.29.0+k3s1 ",(0,r.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9052",children:"(#9052)"})]}),"\n",(0,r.jsxs)(s.li,{children:["Update flannel to v0.24.0 and remove multiclustercidr flag ",(0,r.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9075",children:"(#9075)"})]}),"\n",(0,r.jsxs)(s.li,{children:["Remove rotate-keys subcommand ",(0,r.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/pull/9079",children:"(#9079)"})]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{})]})}function c(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},1151:(e,s,t)=>{t.d(s,{Z:()=>h,a:()=>l});var r=t(7294);const n={},i=r.createContext(n);function l(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function h(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);