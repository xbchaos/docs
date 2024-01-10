"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[5251],{9550:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=s(5893),t=s(1151);const i={title:"\u5347\u7ea7",weight:25},a=void 0,l={id:"upgrades/upgrades",title:"\u5347\u7ea7",description:"\u5347\u7ea7 K3s \u96c6\u7fa4",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/upgrades/upgrades.md",sourceDirName:"upgrades",slug:"/upgrades/",permalink:"/zh/upgrades/",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/upgrades/upgrades.md",tags:[],version:"current",lastUpdatedAt:1704919175,formattedLastUpdatedAt:"2024\u5e741\u670810\u65e5",frontMatter:{title:"\u5347\u7ea7",weight:25},sidebar:"mySidebar",previous:{title:"\u96c6\u7fa4\u8d1f\u8f7d\u5747\u8861\u5668",permalink:"/zh/datastore/cluster-loadbalancer"},next:{title:"\u505c\u6b62 K3s",permalink:"/zh/upgrades/killall"}},c={},d=[{value:"\u5347\u7ea7 K3s \u96c6\u7fa4",id:"\u5347\u7ea7-k3s-\u96c6\u7fa4",level:3},{value:"\u7279\u5b9a\u7248\u672c\u7684\u6ce8\u610f\u4e8b\u9879",id:"\u7279\u5b9a\u7248\u672c\u7684\u6ce8\u610f\u4e8b\u9879",level:3}];function o(e){const r={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h3,{id:"\u5347\u7ea7-k3s-\u96c6\u7fa4",children:"\u5347\u7ea7 K3s \u96c6\u7fa4"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/zh/upgrades/manual",children:"\u624b\u52a8\u5347\u7ea7"}),"\u63cf\u8ff0\u4e86\u624b\u52a8\u5347\u7ea7\u96c6\u7fa4\u7684\u51e0\u79cd\u65b9\u6cd5\u3002\u5b83\u4e5f\u53ef\u4ee5\u4f5c\u4e3a\u901a\u8fc7\u7b2c\u4e09\u65b9\u57fa\u7840\u8bbe\u65bd\u5373\u4ee3\u7801\u5de5\u5177\uff08\u5982 ",(0,n.jsx)(r.a,{href:"https://www.terraform.io/",children:"Terraform"}),"\uff09\u8fdb\u884c\u5347\u7ea7\u7684\u57fa\u7840\u3002"]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/zh/upgrades/automated",children:"\u81ea\u52a8\u5347\u7ea7"}),"\u63cf\u8ff0\u4e86\u5982\u4f55\u4f7f\u7528 Rancher \u7684 ",(0,n.jsx)(r.a,{href:"https://github.com/rancher/system-upgrade-controller",children:"system-upgrade-controller"})," \u6267\u884c Kubernetes \u539f\u751f\u7684\u81ea\u52a8\u5347\u7ea7\u3002"]}),"\n",(0,n.jsx)(r.h3,{id:"\u7279\u5b9a\u7248\u672c\u7684\u6ce8\u610f\u4e8b\u9879",children:"\u7279\u5b9a\u7248\u672c\u7684\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Traefik"}),"\uff1a\u5982\u679c\u6ca1\u6709\u7981\u7528 Traefik\uff0cK3s 1.20 \u53ca\u4ee5\u524d\u7684\u7248\u672c\u5c06\u5b89\u88c5 Traefik v1\uff0c\u800c K3s 1.21 \u53ca\u4ee5\u540e\u7684\u7248\u672c\u5c06\u5b89\u88c5 Traefik v2\u3002\u8981\u5c06\u65e7\u7248 Traefik v1 \u5347\u7ea7\u5230 Traefik v2\uff0c\u8bf7\u53c2\u9605 ",(0,n.jsx)(r.a,{href:"https://doc.traefik.io/traefik/migration/v1-to-v2/",children:"Traefik \u6587\u6863"}),"\u5e76\u4f7f\u7528",(0,n.jsx)(r.a,{href:"https://github.com/traefik/traefik-migration-tool",children:"\u8fc1\u79fb\u5de5\u5177"}),"\u3002"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"K3s \u5f15\u5bfc\u6570\u636e"}),"\uff1a\u5982\u679c\u4f60\u5728 HA \u914d\u7f6e\u4e2d\u4f7f\u7528 K3s \u548c\u5916\u90e8 SQL \u6570\u636e\u5b58\u50a8\uff0c\u5e76\u4e14\u4f60\u7684 Server\uff08control plane\uff09\u8282\u70b9\u6ca1\u6709\u4f7f\u7528 ",(0,n.jsx)(r.code,{children:"--token"})," CLI \u6807\u5fd7\u542f\u52a8\uff0c\u4f60\u5c06\u4e0d\u518d\u80fd\u591f\u5728\u4e0d\u6307\u5b9a\u4ee4\u724c\u7684\u60c5\u51b5\u4e0b\u5c06\u5176\u4ed6 K3s Server \u6dfb\u52a0\u5230\u96c6\u7fa4\u4e2d\u3002\u8bf7\u4fdd\u7559\u6b64\u4ee4\u724c\u7684\u526f\u672c\uff0c\u56e0\u4e3a\u6062\u590d\u5907\u4efd\u65f6\u9700\u8981\u5b83\u3002\u4ee5\u524d\uff0cK3s \u5728\u4f7f\u7528\u5916\u90e8 SQL \u6570\u636e\u5b58\u50a8\u65f6\u4e0d\u5f3a\u5236\u4f7f\u7528 token\u3002"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"\u53d7\u5f71\u54cd\u7684\u7248\u672c\u662f <= v1.19.12+k3s1, v1.20.8+k3s1, v1.21.2+k3s1\uff1b\u4fee\u8865\u540e\u7684\u7248\u672c\u4e3a v1.19.13+k3s1\u3001v1.20.9+k3s1\u3001v1.21.3+k3s1\u3002"}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"\u4f60\u53ef\u4ee5\u4ece\u5df2\u52a0\u5165\u96c6\u7fa4\u7684\u4efb\u4f55 server \u4e2d\u68c0\u7d22\u4ee4\u724c\u503c\uff0c\u5982\u4e0b\u6240\u793a\uff1a"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"cat /var/lib/rancher/k3s/server/token\n"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"\u5b9e\u9a8c\u6027 Dqlite"}),"\uff1a\u5b9e\u9a8c\u6027\u5d4c\u5165\u5f0f Dqlite \u6570\u636e\u5b58\u50a8\u5728 K3s v1.19.1 \u4e2d\u5df2\u88ab\u5f03\u7528\u3002\u8bf7\u6ce8\u610f\uff0c\u4e0d\u652f\u6301\u4ece\u5b9e\u9a8c\u6027 Dqlite \u5347\u7ea7\u5230\u5b9e\u9a8c\u6027\u5d4c\u5165\u5f0f etcd\u3002\u5982\u679c\u4f60\u5c1d\u8bd5\u5347\u7ea7\uff0c\u5347\u7ea7\u5c06\u4e0d\u4f1a\u6210\u529f\uff0c\u5e76\u4e14\u6570\u636e\u5c06\u4f1a\u4e22\u5931\u3002"]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},1151:(e,r,s)=>{s.d(r,{Z:()=>l,a:()=>a});var n=s(7294);const t={},i=n.createContext(t);function a(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);