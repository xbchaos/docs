"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[9751],{2812:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var s=n(5893),r=n(1151);const i={title:"Helm",weight:42},a=void 0,c={id:"helm",title:"Helm",description:"Helm is the package management tool of choice for Kubernetes. Helm charts provide templating syntax for Kubernetes YAML manifest documents. With Helm, developers or cluster administrators can create configurable templates known as Charts, instead of just using static manifests. For more information about creating your own Chart catalog, check out the docs at https://helm.sh/docs/intro/quickstart/.",source:"@site/docs/helm.md",sourceDirName:".",slug:"/helm",permalink:"/helm",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/helm.md",tags:[],version:"current",lastUpdatedAt:1704919175,formattedLastUpdatedAt:"Jan 10, 2024",frontMatter:{title:"Helm",weight:42},sidebar:"mySidebar",previous:{title:"Networking",permalink:"/networking"},next:{title:"Advanced Options / Configuration",permalink:"/advanced"}},o={},l=[{value:"Using the Helm Controller",id:"using-the-helm-controller",level:3},{value:"HelmChart Field Definitions",id:"helmchart-field-definitions",level:4},{value:"Customizing Packaged Components with HelmChartConfig",id:"customizing-packaged-components-with-helmchartconfig",level:3},{value:"Migrating from Helm v2",id:"migrating-from-helm-v2",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Helm is the package management tool of choice for Kubernetes. Helm charts provide templating syntax for Kubernetes YAML manifest documents. With Helm, developers or cluster administrators can create configurable templates known as Charts, instead of just using static manifests. For more information about creating your own Chart catalog, check out the docs at ",(0,s.jsx)(t.a,{href:"https://helm.sh/docs/intro/quickstart/",children:"https://helm.sh/docs/intro/quickstart/"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["K3s does not require any special configuration to support Helm. Just be sure you have properly set the kubeconfig path as per the ",(0,s.jsx)(t.a,{href:"/cluster-access",children:"cluster access"})," documentation."]}),"\n",(0,s.jsxs)(t.p,{children:["K3s includes a ",(0,s.jsx)(t.a,{href:"https://github.com/k3s-io/helm-controller/",children:"Helm Controller"})," that manages installing, upgrading/reconfiguring, and uninstalling Helm charts using a HelmChart Custom Resource Definition (CRD). Paired with ",(0,s.jsx)(t.a,{href:"/installation/packaged-components",children:"auto-deploying AddOn manifests"}),", installing a Helm chart on your cluster can be automated by creating a single file on disk."]}),"\n",(0,s.jsx)(t.h3,{id:"using-the-helm-controller",children:"Using the Helm Controller"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.a,{href:"https://github.com/k3s-io/helm-controller#helm-controller",children:"HelmChart Custom Resource"})," captures most of the options you would normally pass to the ",(0,s.jsx)(t.code,{children:"helm"})," command-line tool. Here's an example of how you might deploy Apache from the Bitnami chart repository, overriding some of the default chart values. Note that the HelmChart resource itself is in the ",(0,s.jsx)(t.code,{children:"kube-system"})," namespace, but the chart's resources will be deployed to the ",(0,s.jsx)(t.code,{children:"web"})," namespace, which is created in the same manifest. This can be useful if you want to keep your HelmChart resources separated from the the resources they deploy."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"apiVersion: v1\nkind: Namespace\nmetadata:\n  name: web\n---\napiVersion: helm.cattle.io/v1\nkind: HelmChart\nmetadata:\n  name: apache\n  namespace: kube-system\nspec:\n  repo: https://charts.bitnami.com/bitnami\n  chart: apache\n  targetNamespace: web\n  valuesContent: |-\n    service:\n      type: ClusterIP\n    ingress:\n      enabled: true\n      hostname: www.example.com\n    metrics:\n      enabled: true\n"})}),"\n",(0,s.jsx)(t.p,{children:"An example of deploying a helm chart from a private repo with authentication:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"apiVersion: helm.cattle.io/v1\nkind: HelmChart\nmetadata:\n  namespace: kube-system\n  name: example-app\nspec:\n  targetNamespace: example-space\n  createNamespace: true\n  version: v1.2.3\n  chart: example-app\n  repo: https://secure-repo.example.com\n  authSecret:\n    name: example-repo-auth\n  repoCAConfigMap:\n    name: example-repo-ca\n  valuesContent: |-\n    image:\n      tag: v1.2.2\n---\napiVersion: v1\nkind: Secret\nmetadata:\n  namespace: kube-system\n  name: example-repo-auth\ntype: kubernetes.io/basic-auth\nstringData:\n  username: user\n  password: pass\n---\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  namespace: kube-system\n  name: example-repo-ca\ndata:\n  ca.crt: |-\n    -----BEGIN CERTIFICATE-----\n    <YOUR CERTIFICATE>\n    -----END CERTIFICATE-----\n"})}),"\n",(0,s.jsx)(t.h4,{id:"helmchart-field-definitions",children:"HelmChart Field Definitions"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Helm Argument / Flag Equivalent"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"metadata.name"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Helm Chart name"}),(0,s.jsx)(t.td,{children:"NAME"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"spec.chart"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Helm Chart name in repository, or complete HTTPS URL to chart archive (.tgz)"}),(0,s.jsx)(t.td,{children:"CHART"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"spec.targetNamespace"}),(0,s.jsx)(t.td,{children:"default"}),(0,s.jsx)(t.td,{children:"Helm Chart target namespace"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"--namespace"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"spec.createNamespace"}),(0,s.jsx)(t.td,{children:"false"}),(0,s.jsx)(t.td,{children:"Create target namespace if not present"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"--create-namespace"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"spec.version"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Helm Chart version (when installing from repository)"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"--version"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"spec.repo"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Helm Chart repository URL"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"--repo"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"spec.repoCA"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Verify certificates of HTTPS-enabled servers using this CA bundle. Should be a string containing one or more PEM-encoded CA Certificates."}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"--ca-file"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"spec.repoCAConfigMap"}),(0,s.jsx)(t.td,{}),(0,s.jsxs)(t.td,{children:["Reference to a ConfigMap containing CA Certificates to be be trusted by Helm. Can be used along with or instead of ",(0,s.jsx)(t.code,{children:"repoCA"})]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"--ca-file"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"spec.helmVersion"}),(0,s.jsx)(t.td,{children:"v3"}),(0,s.jsxs)(t.td,{children:["Helm version to use (",(0,s.jsx)(t.code,{children:"v2"})," or ",(0,s.jsx)(t.code,{children:"v3"}),")"]}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"spec.bootstrap"}),(0,s.jsx)(t.td,{children:"False"}),(0,s.jsx)(t.td,{children:"Set to True if this chart is needed to bootstrap the cluster (Cloud Controller Manager, etc)"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"spec.set"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Override simple default Chart values. These take precedence over options set via valuesContent."}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"--set"})," / ",(0,s.jsx)(t.code,{children:"--set-string"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"spec.jobImage"}),(0,s.jsx)(t.td,{}),(0,s.jsxs)(t.td,{children:["Specify the image to use when installing the helm chart. E.g. rancher/klipper-helm",":v0",".3.0 ."]}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"spec.backOffLimit"}),(0,s.jsx)(t.td,{children:"1000"}),(0,s.jsx)(t.td,{children:"Specify the number of retries before considering a job failed."}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"spec.timeout"}),(0,s.jsx)(t.td,{children:"300s"}),(0,s.jsxs)(t.td,{children:["Timeout for Helm operations, as a ",(0,s.jsx)(t.a,{href:"https://pkg.go.dev/time#ParseDuration",children:"duration string"})," (",(0,s.jsx)(t.code,{children:"300s"}),", ",(0,s.jsx)(t.code,{children:"10m"}),", ",(0,s.jsx)(t.code,{children:"1h"}),", etc)"]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"--timeout"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"spec.failurePolicy"}),(0,s.jsx)(t.td,{children:"reinstall"}),(0,s.jsxs)(t.td,{children:["Set to ",(0,s.jsx)(t.code,{children:"abort"})," which case the Helm operation is aborted, pending manual intervention by the operator."]}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"spec.authSecret"}),(0,s.jsx)(t.td,{}),(0,s.jsxs)(t.td,{children:["Reference to Secret of type ",(0,s.jsx)(t.code,{children:"kubernetes.io/basic-auth"})," holding Basic auth credentials for the Chart repo."]}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"spec.authPassCredentials"}),(0,s.jsx)(t.td,{children:"false"}),(0,s.jsx)(t.td,{children:"Pass Basic auth credentials to all domains."}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"--pass-credentials"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"spec.dockerRegistrySecret"}),(0,s.jsx)(t.td,{}),(0,s.jsxs)(t.td,{children:["Reference to Secret of type ",(0,s.jsx)(t.code,{children:"kubernetes.io/dockerconfigjson"})," holding Docker auth credentials for the OCI-based registry acting as the Chart repo."]}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"spec.valuesContent"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Override complex default Chart values via YAML file content"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"--values"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"spec.chartContent"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Base64-encoded chart archive .tgz - overrides spec.chart"}),(0,s.jsx)(t.td,{children:"CHART"})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["Content placed in ",(0,s.jsx)(t.code,{children:"/var/lib/rancher/k3s/server/static/"})," can be accessed anonymously via the Kubernetes APIServer from within the cluster. This URL can be templated using the special variable ",(0,s.jsx)(t.code,{children:"%{KUBERNETES_API}%"})," in the ",(0,s.jsx)(t.code,{children:"spec.chart"})," field. For example, the packaged Traefik component loads its chart from ",(0,s.jsx)(t.code,{children:"https://%{KUBERNETES_API}%/static/charts/traefik-12.0.000.tgz"}),"."]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"name"})," field should follow the Helm chart naming conventions. Refer to the ",(0,s.jsx)(t.a,{href:"https://helm.sh/docs/chart_best_practices/conventions/#chart-names",children:"Helm Best Practices documentation"})," to learn more."]})}),"\n",(0,s.jsx)(t.h3,{id:"customizing-packaged-components-with-helmchartconfig",children:"Customizing Packaged Components with HelmChartConfig"}),"\n",(0,s.jsxs)(t.p,{children:["To allow overriding values for packaged components that are deployed as HelmCharts (such as Traefik), K3s supports customizing deployments via a HelmChartConfig resources. The HelmChartConfig resource must match the name and namespace of its corresponding HelmChart, and it supports providing additional ",(0,s.jsx)(t.code,{children:"valuesContent"}),", which is passed to the ",(0,s.jsx)(t.code,{children:"helm"})," command as an additional value file."]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["HelmChart ",(0,s.jsx)(t.code,{children:"spec.set"})," values override HelmChart and HelmChartConfig ",(0,s.jsx)(t.code,{children:"spec.valuesContent"})," settings."]})}),"\n",(0,s.jsxs)(t.p,{children:["For example, to customize the packaged Traefik ingress configuration, you can create a file named ",(0,s.jsx)(t.code,{children:"/var/lib/rancher/k3s/server/manifests/traefik-config.yaml"})," and populate it with the following content:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"apiVersion: helm.cattle.io/v1\nkind: HelmChartConfig\nmetadata:\n  name: traefik\n  namespace: kube-system\nspec:\n  valuesContent: |-\n    image:\n      name: traefik\n      tag: 2.9.10\n    web:\n      forwardedHeaders:\n        trustedIPs:\n          - 10.0.0.0/8\n"})}),"\n",(0,s.jsx)(t.h3,{id:"migrating-from-helm-v2",children:"Migrating from Helm v2"}),"\n",(0,s.jsxs)(t.p,{children:["K3s can handle either Helm v2 or Helm v3. If you wish to migrate to Helm v3, ",(0,s.jsx)(t.a,{href:"https://helm.sh/blog/migrate-from-helm-v2-to-helm-v3/",children:"this"})," blog post by Helm explains how to use a plugin to successfully migrate. Refer to the official Helm 3 documentation ",(0,s.jsx)(t.a,{href:"https://helm.sh/docs/",children:"here"})," for more information. Just be sure you have properly set your kubeconfig as per the section about ",(0,s.jsx)(t.a,{href:"/cluster-access",children:"cluster access."})]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["Helm 3 no longer requires Tiller and the ",(0,s.jsx)(t.code,{children:"helm init"})," command. Refer to the official documentation for details."]})})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>a});var s=n(7294);const r={},i=s.createContext(r);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);