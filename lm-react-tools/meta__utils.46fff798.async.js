"use strict";(self.webpackChunklm_react_tools=self.webpackChunklm_react_tools||[]).push([[232],{85945:function(J,F,n){var S;n.r(F),n.d(F,{demos:function(){return G}});var W=n(90228),x=n.n(W),Z=n(48305),E=n.n(Z),z=n(87999),O=n.n(z),e=n(75271),R=n(30005),G={"src-utils-tree-demo-0":{component:e.memo(e.lazy(O()(x()().mark(function y(){var h,v,p,I,g,o;return x()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return B.next=2,Promise.resolve().then(n.t.bind(n,75271,19));case 2:return h=B.sent,v=h.useState,B.next=6,Promise.resolve().then(n.bind(n,30005));case 6:return p=B.sent,I=p.completeTreeFunc,B.next=10,Promise.resolve().then(n.bind(n,30005));case 10:return g=B.sent,o=g.Button,B.abrupt("return",{default:function(){var $=v([{id:"1",name:"\u8282\u70B91",children:[{id:"1-1",name:"\u8282\u70B91-1"},{id:"1-2",name:"\u8282\u70B91-2"}]},{id:"2",name:"\u8282\u70B92",children:[{id:"2-1",name:"\u8282\u70B92-1"}]}]),C=E()($,1),L=C[0],s=v([]),r=E()(s,2),i=r[0],f=r[1],u=function c(m){return e.createElement("div",null,m.map(function(t){return e.createElement("div",{key:t.id,style:{marginLeft:"20px",borderLeft:"1px solid #ccc",paddingLeft:"10px"}},e.createElement("p",{style:{color:i.includes(t.id)?"red":"black",fontWeight:i.includes(t.id)?"bold":"normal"}},t.name," ",i.includes(t.id)?"(\u53F6\u5B50\u8282\u70B9)":""),t.children&&c(t.children))}))};return e.createElement("div",null,e.createElement(o,{variant:"primary",onClick:function(){var m=[];I(L,function(t){var a=t.node,d=t.leaf;d&&m.push(a.id)}),f(m)}},"\u6807\u8BB0\u53F6\u5B50\u8282\u70B9"),e.createElement(o,{variant:"danger",onClick:function(){f([])},style:{marginLeft:"10px"}},"\u6E05\u9664\u6807\u8BB0"),e.createElement("div",{style:{marginTop:"20px"}},e.createElement("h4",null,"\u6811\u5F62\u7ED3\u6784:"),u(L)),i.length>0&&e.createElement("p",{style:{color:"green",marginTop:"10px"}},"\u5DF2\u6807\u8BB0 ",i.length," \u4E2A\u53F6\u5B50\u8282\u70B9"))}});case 13:case"end":return B.stop()}},y)})))),asset:{type:"BLOCK",id:"src-utils-tree-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { useState } from 'react';
import { completeTreeFunc } from 'lm-react-tools';
import { Button } from 'lm-react-tools';

export default () => {
  const [treeData] = useState([
    {
      id: '1',
      name: '\u8282\u70B91',
      children: [
        { id: '1-1', name: '\u8282\u70B91-1' },
        { id: '1-2', name: '\u8282\u70B91-2' },
      ],
    },
    {
      id: '2',
      name: '\u8282\u70B92',
      children: [{ id: '2-1', name: '\u8282\u70B92-1' }],
    },
  ]);

  const [markedNodes, setMarkedNodes] = useState([]);

  const renderTree = (data) => (
    <div>
      {data.map((item) => (
        <div
          key={item.id}
          style={{
            marginLeft: '20px',
            borderLeft: '1px solid #ccc',
            paddingLeft: '10px',
          }}
        >
          <p
            style={{
              color: markedNodes.includes(item.id) ? 'red' : 'black',
              fontWeight: markedNodes.includes(item.id) ? 'bold' : 'normal',
            }}
          >
            {item.name} {markedNodes.includes(item.id) ? '(\u53F6\u5B50\u8282\u70B9)' : ''}
          </p>
          {item.children && renderTree(item.children)}
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <Button
        variant="primary"
        onClick={() => {
          const leafNodes = [];
          completeTreeFunc(treeData, ({ node, leaf }) => {
            if (leaf) {
              leafNodes.push(node.id);
            }
          });
          setMarkedNodes(leafNodes);
        }}
      >
        \u6807\u8BB0\u53F6\u5B50\u8282\u70B9
      </Button>

      <Button
        variant="danger"
        onClick={() => {
          setMarkedNodes([]);
        }}
        style={{ marginLeft: '10px' }}
      >
        \u6E05\u9664\u6807\u8BB0
      </Button>

      <div style={{ marginTop: '20px' }}>
        <h4>\u6811\u5F62\u7ED3\u6784:</h4>
        {renderTree(treeData)}
      </div>

      {markedNodes.length > 0 && (
        <p style={{ color: 'green', marginTop: '10px' }}>
          \u5DF2\u6807\u8BB0 {markedNodes.length} \u4E2A\u53F6\u5B50\u8282\u70B9
        </p>
      )}
    </div>
  );
};`},react:{type:"NPM",value:"18.3.1"},"lm-react-tools":{type:"NPM",value:"0.2.1"}},entry:"index.jsx"},context:{react:S||(S=n.t(e,2)),"lm-react-tools":R},renderOpts:{compile:function(){var y=O()(x()().mark(function v(){var p,I=arguments;return x()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n.e(372).then(n.bind(n,80372));case 2:return o.abrupt("return",(p=o.sent).default.apply(p,I));case 3:case"end":return o.stop()}},v)}));function h(){return y.apply(this,arguments)}return h}()}},"src-utils-tree-demo-1":{component:e.memo(e.lazy(O()(x()().mark(function y(){var h,v,p,I,g;return x()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(n.t.bind(n,75271,19));case 2:return h=l.sent,v=h.useState,l.next=6,Promise.resolve().then(n.bind(n,30005));case 6:return p=l.sent,I=p.getTreeIdInfo,g=p.Button,l.abrupt("return",{default:function(){var M=v([{id:"1",name:"\u8282\u70B91",children:[{id:"1-1",name:"\u8282\u70B91-1"},{id:"1-2",name:"\u8282\u70B91-2"}]},{id:"2",name:"\u8282\u70B92",children:[{id:"2-1",name:"\u8282\u70B92-1"}]}]),$=E()(M,1),C=$[0],L=v(null),s=E()(L,2),r=s[0],i=s[1],f=function u(c){return e.createElement("div",null,c.map(function(m){return e.createElement("div",{key:m.id,style:{marginLeft:"20px",borderLeft:"1px solid #ccc",paddingLeft:"10px"}},e.createElement("p",null,m.name),m.children&&u(m.children))}))};return e.createElement("div",null,e.createElement(g,{variant:"primary",onClick:function(){var c=treeUtils.getTreeIdInfo({treeData:C,id:"1-2"});i(c)}},"\u67E5\u627E\u8282\u70B91-2\u4FE1\u606F"),e.createElement(g,{variant:"primary",onClick:function(){var c=treeUtils.getTreeIdInfo({treeData:C,id:"2-1"});i(c)},style:{marginLeft:"10px"}},"\u67E5\u627E\u8282\u70B92-1\u4FE1\u606F"),e.createElement("div",{style:{marginTop:"20px"}},e.createElement("h4",null,"\u5F53\u524D\u6811\u7ED3\u6784:"),f(C)),r&&e.createElement("div",{style:{marginTop:"20px",padding:"10px",background:"#f0f8ff",border:"1px solid #ccc"}},e.createElement("h4",null,"\u8282\u70B9\u4FE1\u606F:"),e.createElement("p",null,e.createElement("strong",null,"\u8282\u70B9\u540D\u79F0:")," ",r.node.name),e.createElement("p",null,e.createElement("strong",null,"\u5C42\u7EA7\u8DEF\u5F84:")," ",r.floor.join("-")),e.createElement("p",null,e.createElement("strong",null,"\u662F\u5426\u662F\u53F6\u5B50\u8282\u70B9:")," ",r.leaf?"\u662F":"\u5426"),e.createElement("p",null,e.createElement("strong",null,"\u7236\u8282\u70B9\u7D22\u5F15:")," ",r.parentIndex.join("-")),e.createElement("p",null,e.createElement("strong",null,"\u7236\u8282\u70B9\u6570\u91CF:")," ",r.parentNodes.length)))}});case 10:case"end":return l.stop()}},y)})))),asset:{type:"BLOCK",id:"src-utils-tree-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { useState } from 'react';
import { getTreeIdInfo, Button } from 'lm-react-tools';

export default () => {
  const [treeData] = useState([
    {
      id: '1',
      name: '\u8282\u70B91',
      children: [
        { id: '1-1', name: '\u8282\u70B91-1' },
        { id: '1-2', name: '\u8282\u70B91-2' },
      ],
    },
    {
      id: '2',
      name: '\u8282\u70B92',
      children: [{ id: '2-1', name: '\u8282\u70B92-1' }],
    },
  ]);

  const [nodeInfo, setNodeInfo] = useState(null);

  const renderTree = (data) => (
    <div>
      {data.map((item) => (
        <div
          key={item.id}
          style={{
            marginLeft: '20px',
            borderLeft: '1px solid #ccc',
            paddingLeft: '10px',
          }}
        >
          <p>{item.name}</p>
          {item.children && renderTree(item.children)}
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <Button
        variant="primary"
        onClick={() => {
          const info = treeUtils.getTreeIdInfo({ treeData, id: '1-2' });
          setNodeInfo(info);
        }}
      >
        \u67E5\u627E\u8282\u70B91-2\u4FE1\u606F
      </Button>

      <Button
        variant="primary"
        onClick={() => {
          const info = treeUtils.getTreeIdInfo({ treeData, id: '2-1' });
          setNodeInfo(info);
        }}
        style={{ marginLeft: '10px' }}
      >
        \u67E5\u627E\u8282\u70B92-1\u4FE1\u606F
      </Button>

      <div style={{ marginTop: '20px' }}>
        <h4>\u5F53\u524D\u6811\u7ED3\u6784:</h4>
        {renderTree(treeData)}
      </div>

      {nodeInfo && (
        <div
          style={{
            marginTop: '20px',
            padding: '10px',
            background: '#f0f8ff',
            border: '1px solid #ccc',
          }}
        >
          <h4>\u8282\u70B9\u4FE1\u606F:</h4>
          <p>
            <strong>\u8282\u70B9\u540D\u79F0:</strong> {nodeInfo.node.name}
          </p>
          <p>
            <strong>\u5C42\u7EA7\u8DEF\u5F84:</strong> {nodeInfo.floor.join('-')}
          </p>
          <p>
            <strong>\u662F\u5426\u662F\u53F6\u5B50\u8282\u70B9:</strong> {nodeInfo.leaf ? '\u662F' : '\u5426'}
          </p>
          <p>
            <strong>\u7236\u8282\u70B9\u7D22\u5F15:</strong> {nodeInfo.parentIndex.join('-')}
          </p>
          <p>
            <strong>\u7236\u8282\u70B9\u6570\u91CF:</strong> {nodeInfo.parentNodes.length}
          </p>
        </div>
      )}
    </div>
  );
};`},react:{type:"NPM",value:"18.3.1"},"lm-react-tools":{type:"NPM",value:"0.2.1"}},entry:"index.jsx"},context:{react:S||(S=n.t(e,2)),"lm-react-tools":R},renderOpts:{compile:function(){var y=O()(x()().mark(function v(){var p,I=arguments;return x()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n.e(372).then(n.bind(n,80372));case 2:return o.abrupt("return",(p=o.sent).default.apply(p,I));case 3:case"end":return o.stop()}},v)}));function h(){return y.apply(this,arguments)}return h}()}},"src-utils-tree-demo-2":{component:e.memo(e.lazy(O()(x()().mark(function y(){var h,v,p,I,g;return x()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(n.t.bind(n,75271,19));case 2:return h=l.sent,v=h.useState,l.next=6,Promise.resolve().then(n.bind(n,30005));case 6:return p=l.sent,I=p.removeTreeNodeById,g=p.Button,l.abrupt("return",{default:function(){var M=[{id:"1",name:"\u8282\u70B91",children:[{id:"1-1",name:"\u8282\u70B91-1"},{id:"1-2",name:"\u8282\u70B91-2"}]},{id:"2",name:"\u8282\u70B92",children:[{id:"2-1",name:"\u8282\u70B92-1"}]}],$=v(M),C=E()($,2),L=C[0],s=C[1],r=v(""),i=E()(r,2),f=i[0],u=i[1],c=function m(t){return e.createElement("div",null,t.map(function(a){return e.createElement("div",{key:a.id,style:{marginLeft:"20px",borderLeft:"1px solid #ccc",paddingLeft:"10px"}},e.createElement("p",null,a.name),a.children&&m(a.children))}))};return e.createElement("div",null,e.createElement(g,{variant:"primary",onClick:function(){var t=I({treeData:L,id:"1-1"},{clone:!0});t.success?(s(t.treeData),u("\u5220\u9664\u6210\u529F\uFF01")):u("\u5220\u9664\u5931\u8D25")},style:{marginRight:"10px"}},"\u5220\u9664\u8282\u70B91-1"),e.createElement(g,{variant:"primary",onClick:function(){var t=I({treeData:L,id:"2"},{clone:!0});t.success?(s(t.treeData),u("\u5220\u9664\u6210\u529F\uFF01")):u("\u5220\u9664\u5931\u8D25")}},"\u5220\u9664\u8282\u70B92"),e.createElement(g,{variant:"danger",onClick:function(){s(M),u("\u5DF2\u91CD\u7F6E\u6811\u7ED3\u6784")},style:{marginLeft:"10px"}},"\u91CD\u7F6E"),e.createElement("div",{style:{marginTop:"20px"}},e.createElement("h4",null,"\u5F53\u524D\u6811\u7ED3\u6784:"),c(L)),f&&e.createElement("p",{style:{color:"green",marginTop:"10px"}},f))}});case 10:case"end":return l.stop()}},y)})))),asset:{type:"BLOCK",id:"src-utils-tree-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { useState } from 'react';
import { removeTreeNodeById, Button } from 'lm-react-tools';

export default () => {
  const initialTreeData = [
    {
      id: '1',
      name: '\u8282\u70B91',
      children: [
        { id: '1-1', name: '\u8282\u70B91-1' },
        { id: '1-2', name: '\u8282\u70B91-2' },
      ],
    },
    {
      id: '2',
      name: '\u8282\u70B92',
      children: [{ id: '2-1', name: '\u8282\u70B92-1' }],
    },
  ];

  const [treeData, setTreeData] = useState(initialTreeData);
  const [message, setMessage] = useState('');

  const renderTree = (data) => (
    <div>
      {data.map((item) => (
        <div
          key={item.id}
          style={{
            marginLeft: '20px',
            borderLeft: '1px solid #ccc',
            paddingLeft: '10px',
          }}
        >
          <p>{item.name}</p>
          {item.children && renderTree(item.children)}
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <Button
        variant="primary"
        onClick={() => {
          const result = removeTreeNodeById(
            { treeData, id: '1-1' },
            { clone: true },
          );
          if (result.success) {
            setTreeData(result.treeData);
            setMessage('\u5220\u9664\u6210\u529F\uFF01');
          } else {
            setMessage('\u5220\u9664\u5931\u8D25');
          }
        }}
        style={{ marginRight: '10px' }}
      >
        \u5220\u9664\u8282\u70B91-1
      </Button>

      <Button
        variant="primary"
        onClick={() => {
          const result = removeTreeNodeById(
            { treeData, id: '2' },
            { clone: true },
          );
          if (result.success) {
            setTreeData(result.treeData);
            setMessage('\u5220\u9664\u6210\u529F\uFF01');
          } else {
            setMessage('\u5220\u9664\u5931\u8D25');
          }
        }}
      >
        \u5220\u9664\u8282\u70B92
      </Button>

      <Button
        variant="danger"
        onClick={() => {
          setTreeData(initialTreeData);
          setMessage('\u5DF2\u91CD\u7F6E\u6811\u7ED3\u6784');
        }}
        style={{ marginLeft: '10px' }}
      >
        \u91CD\u7F6E
      </Button>

      <div style={{ marginTop: '20px' }}>
        <h4>\u5F53\u524D\u6811\u7ED3\u6784:</h4>
        {renderTree(treeData)}
      </div>

      {message && (
        <p style={{ color: 'green', marginTop: '10px' }}>{message}</p>
      )}
    </div>
  );
};`},react:{type:"NPM",value:"18.3.1"},"lm-react-tools":{type:"NPM",value:"0.2.1"}},entry:"index.jsx"},context:{react:S||(S=n.t(e,2)),"lm-react-tools":R},renderOpts:{compile:function(){var y=O()(x()().mark(function v(){var p,I=arguments;return x()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n.e(372).then(n.bind(n,80372));case 2:return o.abrupt("return",(p=o.sent).default.apply(p,I));case 3:case"end":return o.stop()}},v)}));function h(){return y.apply(this,arguments)}return h}()}},"src-utils-tree-demo-3":{component:e.memo(e.lazy(O()(x()().mark(function y(){var h,v,p,I,g;return x()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(n.t.bind(n,75271,19));case 2:return h=l.sent,v=h.useState,l.next=6,Promise.resolve().then(n.bind(n,30005));case 6:return p=l.sent,I=p.promoteTreeNodeById,g=p.Button,l.abrupt("return",{default:function(){var M=[{id:"1",name:"\u8282\u70B91",children:[{id:"1-1",name:"\u8282\u70B91-1"},{id:"1-2",name:"\u8282\u70B91-2"},{id:"1-3",name:"\u8282\u70B91-3"}]},{id:"2",name:"\u8282\u70B92",children:[{id:"2-1",name:"\u8282\u70B92-1"}]}],$=v(M),C=E()($,2),L=C[0],s=C[1],r=v(""),i=E()(r,2),f=i[0],u=i[1],c=function m(t){return e.createElement("div",null,t.map(function(a){return e.createElement("div",{key:a.id,style:{marginLeft:"20px",borderLeft:"1px solid #ccc",paddingLeft:"10px"}},e.createElement("p",null,a.name),a.children&&m(a.children))}))};return e.createElement("div",null,e.createElement(g,{variant:"primary",onClick:function(){var t=I({treeData:L,id:"1-2"},{clone:!0});t.success?(s(t.treeData),u(t.message)):u(t.message||"\u64CD\u4F5C\u5931\u8D25")}},"\u63D0\u5347\u8282\u70B91-2"),e.createElement(g,{variant:"danger",onClick:function(){s(M),u("\u5DF2\u91CD\u7F6E\u6811\u7ED3\u6784")},style:{marginLeft:"10px"}},"\u91CD\u7F6E"),e.createElement("div",{style:{marginTop:"20px"}},e.createElement("h4",null,"\u5F53\u524D\u6811\u7ED3\u6784:"),c(L)),f&&e.createElement("p",{style:{color:"green",marginTop:"10px"}},f))}});case 10:case"end":return l.stop()}},y)})))),asset:{type:"BLOCK",id:"src-utils-tree-demo-3",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { useState } from 'react';
import { promoteTreeNodeById, Button } from 'lm-react-tools';

export default () => {
  const initialTreeData = [
    {
      id: '1',
      name: '\u8282\u70B91',
      children: [
        { id: '1-1', name: '\u8282\u70B91-1' },
        { id: '1-2', name: '\u8282\u70B91-2' },
        { id: '1-3', name: '\u8282\u70B91-3' },
      ],
    },
    {
      id: '2',
      name: '\u8282\u70B92',
      children: [{ id: '2-1', name: '\u8282\u70B92-1' }],
    },
  ];

  const [treeData, setTreeData] = useState(initialTreeData);
  const [message, setMessage] = useState('');

  const renderTree = (data) => (
    <div>
      {data.map((item) => (
        <div
          key={item.id}
          style={{
            marginLeft: '20px',
            borderLeft: '1px solid #ccc',
            paddingLeft: '10px',
          }}
        >
          <p>{item.name}</p>
          {item.children && renderTree(item.children)}
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <Button
        variant="primary"
        onClick={() => {
          const result = promoteTreeNodeById(
            { treeData, id: '1-2' },
            { clone: true },
          );
          if (result.success) {
            setTreeData(result.treeData);
            setMessage(result.message);
          } else {
            setMessage(result.message || '\u64CD\u4F5C\u5931\u8D25');
          }
        }}
      >
        \u63D0\u5347\u8282\u70B91-2
      </Button>

      <Button
        variant="danger"
        onClick={() => {
          setTreeData(initialTreeData);
          setMessage('\u5DF2\u91CD\u7F6E\u6811\u7ED3\u6784');
        }}
        style={{ marginLeft: '10px' }}
      >
        \u91CD\u7F6E
      </Button>

      <div style={{ marginTop: '20px' }}>
        <h4>\u5F53\u524D\u6811\u7ED3\u6784:</h4>
        {renderTree(treeData)}
      </div>

      {message && (
        <p style={{ color: 'green', marginTop: '10px' }}>{message}</p>
      )}
    </div>
  );
};`},react:{type:"NPM",value:"18.3.1"},"lm-react-tools":{type:"NPM",value:"0.2.1"}},entry:"index.jsx"},context:{react:S||(S=n.t(e,2)),"lm-react-tools":R},renderOpts:{compile:function(){var y=O()(x()().mark(function v(){var p,I=arguments;return x()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n.e(372).then(n.bind(n,80372));case 2:return o.abrupt("return",(p=o.sent).default.apply(p,I));case 3:case"end":return o.stop()}},v)}));function h(){return y.apply(this,arguments)}return h}()}},"src-utils-tree-demo-4":{component:e.memo(e.lazy(O()(x()().mark(function y(){var h,v,p,I,g;return x()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(n.t.bind(n,75271,19));case 2:return h=l.sent,v=h.useState,l.next=6,Promise.resolve().then(n.bind(n,30005));case 6:return p=l.sent,I=p.demoteTreeNodeById,g=p.Button,l.abrupt("return",{default:function(){var M=[{id:"1",name:"\u8282\u70B91",children:[{id:"1-1",name:"\u8282\u70B91-1"},{id:"1-2",name:"\u8282\u70B91-2"},{id:"1-3",name:"\u8282\u70B91-3"}]},{id:"2",name:"\u8282\u70B92",children:[{id:"2-1",name:"\u8282\u70B92-1"}]}],$=v(M),C=E()($,2),L=C[0],s=C[1],r=v(""),i=E()(r,2),f=i[0],u=i[1],c=function m(t){return e.createElement("div",null,t.map(function(a){return e.createElement("div",{key:a.id,style:{marginLeft:"20px",borderLeft:"1px solid #ccc",paddingLeft:"10px"}},e.createElement("p",null,a.name),a.children&&m(a.children))}))};return e.createElement("div",null,e.createElement(g,{variant:"primary",onClick:function(){var t=I({treeData:L,id:"1-2"},{clone:!0});t.success?(s(t.treeData),u(t.message)):u(t.message||"\u64CD\u4F5C\u5931\u8D25")}},"\u964D\u7EA7\u8282\u70B91-2"),e.createElement(g,{variant:"danger",onClick:function(){s(M),u("\u5DF2\u91CD\u7F6E\u6811\u7ED3\u6784")},style:{marginLeft:"10px"}},"\u91CD\u7F6E"),e.createElement("div",{style:{marginTop:"20px"}},e.createElement("h4",null,"\u5F53\u524D\u6811\u7ED3\u6784:"),c(L)),f&&e.createElement("p",{style:{color:"green",marginTop:"10px"}},f))}});case 10:case"end":return l.stop()}},y)})))),asset:{type:"BLOCK",id:"src-utils-tree-demo-4",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { useState } from 'react';
import { demoteTreeNodeById, Button } from 'lm-react-tools';

export default () => {
  const initialTreeData = [
    {
      id: '1',
      name: '\u8282\u70B91',
      children: [
        { id: '1-1', name: '\u8282\u70B91-1' },
        { id: '1-2', name: '\u8282\u70B91-2' },
        { id: '1-3', name: '\u8282\u70B91-3' },
      ],
    },
    {
      id: '2',
      name: '\u8282\u70B92',
      children: [{ id: '2-1', name: '\u8282\u70B92-1' }],
    },
  ];

  const [treeData, setTreeData] = useState(initialTreeData);
  const [message, setMessage] = useState('');

  const renderTree = (data) => (
    <div>
      {data.map((item) => (
        <div
          key={item.id}
          style={{
            marginLeft: '20px',
            borderLeft: '1px solid #ccc',
            paddingLeft: '10px',
          }}
        >
          <p>{item.name}</p>
          {item.children && renderTree(item.children)}
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <Button
        variant="primary"
        onClick={() => {
          const result = demoteTreeNodeById(
            { treeData, id: '1-2' },
            { clone: true },
          );
          if (result.success) {
            setTreeData(result.treeData);
            setMessage(result.message);
          } else {
            setMessage(result.message || '\u64CD\u4F5C\u5931\u8D25');
          }
        }}
      >
        \u964D\u7EA7\u8282\u70B91-2
      </Button>

      <Button
        variant="danger"
        onClick={() => {
          setTreeData(initialTreeData);
          setMessage('\u5DF2\u91CD\u7F6E\u6811\u7ED3\u6784');
        }}
        style={{ marginLeft: '10px' }}
      >
        \u91CD\u7F6E
      </Button>

      <div style={{ marginTop: '20px' }}>
        <h4>\u5F53\u524D\u6811\u7ED3\u6784:</h4>
        {renderTree(treeData)}
      </div>

      {message && (
        <p style={{ color: 'green', marginTop: '10px' }}>{message}</p>
      )}
    </div>
  );
};`},react:{type:"NPM",value:"18.3.1"},"lm-react-tools":{type:"NPM",value:"0.2.1"}},entry:"index.jsx"},context:{react:S||(S=n.t(e,2)),"lm-react-tools":R},renderOpts:{compile:function(){var y=O()(x()().mark(function v(){var p,I=arguments;return x()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n.e(372).then(n.bind(n,80372));case 2:return o.abrupt("return",(p=o.sent).default.apply(p,I));case 3:case"end":return o.stop()}},v)}));function h(){return y.apply(this,arguments)}return h}()}}}},30005:function(J,F,n){n.r(F),n.d(F,{Button:function(){return R},completeTreeFunc:function(){return l},demoteTreeNodeById:function(){return C},getTreeIdInfo:function(){return B},promoteTreeNodeById:function(){return $},removeTreeNodeById:function(){return M},treeUtils:function(){return L},useLocalStorage:function(){return v}});var S=n(26068),W=n.n(S),x=n(67825),Z=n.n(x),E=n(75271),z=n(52676),O=["variant","size","disabled","loading","className","children","onClick"],e=(0,E.forwardRef)(function(s,r){var i=s.variant,f=i===void 0?"default":i,u=s.size,c=u===void 0?"middle":u,m=s.disabled,t=m===void 0?!1:m,a=s.loading,d=a===void 0?!1:a,T=s.className,D=T===void 0?"":T,N=s.children,b=s.onClick,P=Z()(s,O),j=function(U){if(d||t){U.preventDefault();return}b==null||b(U)},A=["lm-button","lm-button-".concat(f),"lm-button-".concat(c),t&&"lm-button-disabled",d&&"lm-button-loading",D].filter(Boolean).join(" ");return(0,z.jsxs)("button",W()(W()({ref:r,className:A,disabled:t,onClick:j},P),{},{children:[d&&(0,z.jsx)("span",{className:"lm-button-loading-icon",children:"\u23F3"}),N]}))});e.displayName="Button";var R=e,G=n(48305),y=n.n(G);function h(s,r){var i=(0,E.useCallback)(function(){try{var d=window.localStorage.getItem(s);return d?JSON.parse(d):r}catch(T){return console.warn('Error reading localStorage key "'.concat(s,'":'),T),r}},[s,r]),f=(0,E.useState)(i),u=y()(f,2),c=u[0],m=u[1];(0,E.useEffect)(function(){m(i())},[s,r,i]);var t=(0,E.useCallback)(function(d){try{var T=d instanceof Function?d(c):d;m(T),T==null?window.localStorage.removeItem(s):window.localStorage.setItem(s,JSON.stringify(T))}catch(D){console.warn('Error setting localStorage key "'.concat(s,'":'),D)}},[s,c]),a=(0,E.useCallback)(function(){try{m(r),window.localStorage.removeItem(s)}catch(d){console.warn('Error removing localStorage key "'.concat(s,'":'),d)}},[s,r]);return[c,t,a]}var v=h,p=n(15558),I=n.n(p),g=n(48933),o=function(r,i){if(r.length===0||i.length===0)return null;var f=i[i.length-1];if(f>0){var u=r[r.length-1];if(u&&u.children)return u.children[f-1]}var c=r[r.length-1];return c&&c.isRoot?null:c},l=function(r,i){for(var f=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},u=f.clone,c=u===void 0?!1:u,m=function D(N,b,P,j){var A=!N.children||N.children.length===0,k=o(j,P),U=i({node:N,floor:b,parentIndex:P,leaf:A,parentNodes:j,nearestNode:k});if(U)return!0;if(!A)for(var K=0;K<N.children.length;K++){var H=N.children[K],Q=D(H,[].concat(I()(b),[K+1]),[].concat(I()(P),[K]),[].concat(I()(j),[N]));if(Q)return!0}return!1},t=c?(0,g.Z)(r):r,a=0;a<t.length;a++){var d=t[a],T=m(d,[a+1],[a],[{children:t,isRoot:!0}]);if(T)break}return t},B=function(r){var i=r.treeData,f=r.id,u=null;return l(i,function(c){return f===c.node.id?(u=c,!0):!1}),u},M=function(r){var i=r.treeData,f=r.id,u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=u.clone,m=c===void 0?!1:c,t=m?(0,g.Z)(i):i,a={success:!1,info:null,treeData:t,nearestNode:null};return l(t,function(d){if(d.node.id===f){var T=d.parentNodes[d.parentNodes.length-1],D=d.parentIndex[d.parentIndex.length-1];return T&&T.children&&(a.info=d,a.success=!0,a.nearestNode=d.nearestNode,T.children.splice(D,1)),!0}return!1}),a},$=function(r){var i=r.treeData,f=r.id,u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=u.clone,m=c===void 0?!1:c,t=m?(0,g.Z)(i):i,a={success:!1,info:null,treeData:t};return l(t,function(d){if(d.node.id===f){a.info=d;var T=d.parentNodes.length===1&&d.parentNodes[0].isRoot;if(T)return a.message="\u8282\u70B9\u5DF2\u7ECF\u662F\u9876\u5C42\uFF0C\u65E0\u6CD5\u518D\u5411\u4E0A\u63D0\u5347",!0;var D=d.parentNodes[d.parentNodes.length-1],N=d.parentNodes[d.parentNodes.length-2],b=d.parentIndex[d.parentIndex.length-1],P=d.parentIndex[d.parentIndex.length-2];if(D&&D.children){var j=D.children.slice(b+1),A=D.children.splice(b,1)[0];if(j.length>0&&D.children.splice(b),j.length>0){var k;A.children||(A.children=[]),(k=A.children).push.apply(k,I()(j))}var U=N.isRoot;U?t.splice(P+1,0,A):N&&N.children&&N.children.splice(P+1,0,A),a.success=!0,a.message=j.length>0?"\u8282\u70B9\u63D0\u5347\u6210\u529F\uFF0C\u5E76\u5C06 ".concat(j.length," \u4E2A\u540E\u7EED\u5144\u5F1F\u8282\u70B9\u4F5C\u4E3A\u5176\u5B50\u8282\u70B9"):"\u8282\u70B9\u63D0\u5347\u6210\u529F"}else a.message="\u8282\u70B9\u63D0\u5347\u5931\u8D25\uFF0C\u65E0\u6CD5\u627E\u5230\u5408\u9002\u7684\u7236\u7EA7\u7ED3\u6784";return!0}return!1}),a.info||(a.message="\u672A\u627E\u5230\u6307\u5B9A\u7684\u8282\u70B9"),a},C=function(r){var i=r.treeData,f=r.id,u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=u.clone,m=c===void 0?!1:c,t=m?(0,g.Z)(i):i,a={success:!1,info:null,treeData:t};return l(t,function(d){if(d.node.id===f){a.info=d;var T=d.parentIndex[d.parentIndex.length-1];if(T<=0)return a.message="\u8282\u70B9\u6CA1\u6709\u524D\u4E00\u4E2A\u5144\u5F1F\u8282\u70B9\uFF0C\u65E0\u6CD5\u5411\u4E0B\u964D\u7EA7",!0;var D=d.parentNodes[d.parentNodes.length-1];if(!D||!D.children)return a.message="\u8282\u70B9\u964D\u7EA7\u5931\u8D25\uFF0C\u65E0\u6CD5\u627E\u5230\u7236\u7EA7\u7ED3\u6784",!0;var N=D.children[T-1];if(!N)return a.message="\u8282\u70B9\u964D\u7EA7\u5931\u8D25\uFF0C\u65E0\u6CD5\u627E\u5230\u524D\u4E00\u4E2A\u5144\u5F1F\u8282\u70B9",!0;var b=D.children.splice(T,1)[0];return N.children||(N.children=[]),N.children.push(b),a.success=!0,a.message="\u8282\u70B9\u964D\u7EA7\u6210\u529F",!0}return!1}),a.info||(a.message="\u672A\u627E\u5230\u6307\u5B9A\u7684\u8282\u70B9"),a},L={completeTreeFunc:l,getTreeIdInfo:B,removeTreeNodeById:M,promoteTreeNodeById:$,demoteTreeNodeById:C}},33262:function(J,F,n){n.r(F),n.d(F,{texts:function(){return S}});const S=[{value:"\u6811\u5F62\u7ED3\u6784\u64CD\u4F5C\u5DE5\u5177\u96C6\uFF0C\u63D0\u4F9B\u5B8C\u6574\u7684\u6811\u5F62\u6570\u636E\u904D\u5386\u3001\u67E5\u627E\u3001\u5220\u9664\u3001\u5C42\u7EA7\u8C03\u6574\u7B49\u529F\u80FD\u3002",paraId:0,tocIndex:0},{value:`const treeData = [
  {
    id: '1',
    name: '\u8282\u70B91',
    children: [
      { id: '1-1', name: '\u8282\u70B91-1' },
      { id: '1-2', name: '\u8282\u70B91-2' },
    ],
  },
  {
    id: '2',
    name: '\u8282\u70B92',
    children: [{ id: '2-1', name: '\u8282\u70B92-1' }],
  },
];
`,paraId:1,tocIndex:0},{value:`interface NodeInfo {
  node: TreeNode; // \u5F53\u524D\u8282\u70B9
  floor: number[]; // \u5C42\u7EA7\u8DEF\u5F84\uFF08\u4ECE1\u5F00\u59CB\uFF09
  parentIndex: number[]; // \u7236\u8282\u70B9\u7D22\u5F15\u8DEF\u5F84\uFF08\u4ECE0\u5F00\u59CB\uFF09
  leaf: boolean; // \u662F\u5426\u662F\u53F6\u5B50\u8282\u70B9
  parentNodes: TreeNode[]; // \u7236\u8282\u70B9\u94FE
  nearestNode: TreeNode | null; // \u6700\u8FD1\u8282\u70B9\uFF08\u524D\u4E00\u4E2A\u5144\u5F1F\u8282\u70B9\u6216\u7236\u8282\u70B9\uFF09
}
`,paraId:2,tocIndex:7},{value:"\u5C5E\u6027\u8BF4\u660E\uFF1A",paraId:3,tocIndex:7},{value:"node",paraId:4,tocIndex:7},{value:": \u5F53\u524D\u6B63\u5728\u5904\u7406\u7684\u8282\u70B9\u5BF9\u8C61",paraId:4,tocIndex:7},{value:"floor",paraId:4,tocIndex:7},{value:": \u5C42\u7EA7\u8DEF\u5F84\u6570\u7EC4\uFF0C\u8868\u793A\u4ECE\u6839\u8282\u70B9\u5230\u5F53\u524D\u8282\u70B9\u7684\u5C42\u7EA7\u5173\u7CFB\uFF08\u4ECE 1 \u5F00\u59CB\uFF09",paraId:4,tocIndex:7},{value:"parentIndex",paraId:4,tocIndex:7},{value:": \u7236\u8282\u70B9\u7D22\u5F15\u8DEF\u5F84\u6570\u7EC4\uFF0C\u8868\u793A\u6BCF\u4E2A\u7236\u8282\u70B9\u5728\u5176\u7236\u7EA7\u4E2D\u7684\u7D22\u5F15\u4F4D\u7F6E\uFF08\u4ECE 0 \u5F00\u59CB\uFF09",paraId:4,tocIndex:7},{value:"leaf",paraId:4,tocIndex:7},{value:": \u5E03\u5C14\u503C\uFF0C\u8868\u793A\u5F53\u524D\u8282\u70B9\u662F\u5426\u662F\u53F6\u5B50\u8282\u70B9\uFF08\u6CA1\u6709\u5B50\u8282\u70B9\uFF09",paraId:4,tocIndex:7},{value:"parentNodes",paraId:4,tocIndex:7},{value:": \u7236\u8282\u70B9\u94FE\u6570\u7EC4\uFF0C\u5305\u542B\u4ECE\u6839\u8282\u70B9\u5230\u5F53\u524D\u8282\u70B9\u7684\u6240\u6709\u7236\u8282\u70B9",paraId:4,tocIndex:7},{value:"nearestNode",paraId:4,tocIndex:7},{value:": \u6700\u8FD1\u8282\u70B9\uFF0C\u5982\u679C\u6709\u5144\u5F1F\u8282\u70B9\u5219\u8FD4\u56DE\u524D\u4E00\u4E2A\u5144\u5F1F\u8282\u70B9\uFF0C\u6CA1\u6709\u5144\u5F1F\u8282\u70B9\u5219\u8FD4\u56DE\u7236\u8282\u70B9",paraId:4,tocIndex:7},{value:"\u4E3A\u6811\u5F62\u7ED3\u6784\u505A\u529F\u80FD\u96C6\u5408\u5C01\u88C5\uFF0C\u652F\u6301\u6DF1\u5EA6\u4F18\u5148\u904D\u5386\u3002",paraId:5,tocIndex:9},{value:`completeTreeFunc(
  data: TreeNode[],
  func: (nodeInfo: NodeInfo) => boolean | void,
  options?: TreeOptions
): TreeNode[]
`,paraId:6,tocIndex:9},{value:"\u53C2\u6570\uFF1A",paraId:7,tocIndex:9},{value:"data",paraId:8,tocIndex:9},{value:" (TreeNode[]): \u6811\u5F62\u7ED3\u6784\u6570\u636E",paraId:8,tocIndex:9},{value:"func",paraId:8,tocIndex:9},{value:" (function): \u5904\u7406\u51FD\u6570\uFF0C\u63A5\u6536 NodeInfo \u5BF9\u8C61\uFF0C\u8FD4\u56DE true \u53EF\u63D0\u524D\u7EC8\u6B62\u904D\u5386",paraId:8,tocIndex:9},{value:"options",paraId:8,tocIndex:9},{value:" (TreeOptions, \u53EF\u9009): \u914D\u7F6E\u9009\u9879\uFF0C\u652F\u6301 clone \u53C2\u6570",paraId:8,tocIndex:9},{value:"\u8FD4\u56DE\u503C\uFF1A",paraId:9,tocIndex:9},{value:"TreeNode[]: \u5904\u7406\u540E\u7684\u6811\u5F62\u6570\u636E",paraId:10,tocIndex:9},{value:"NodeInfo \u53C2\u6570\u8BE6\u89E3\uFF1A",paraId:11,tocIndex:9},{value:`
\u5904\u7406\u51FD\u6570\u63A5\u6536\u7684 NodeInfo \u5BF9\u8C61\u5305\u542B\u5B8C\u6574\u7684\u8282\u70B9\u4E0A\u4E0B\u6587\u4FE1\u606F\uFF1A`,paraId:11,tocIndex:9},{value:"\u4F7F\u7528",paraId:12,tocIndex:9},{value:"nodeInfo.node",paraId:12,tocIndex:9},{value:"\u8BBF\u95EE\u5F53\u524D\u8282\u70B9",paraId:12,tocIndex:9},{value:"\u4F7F\u7528",paraId:12,tocIndex:9},{value:"nodeInfo.floor",paraId:12,tocIndex:9},{value:"\u83B7\u53D6\u5C42\u7EA7\u8DEF\u5F84",paraId:12,tocIndex:9},{value:"\u4F7F\u7528",paraId:12,tocIndex:9},{value:"nodeInfo.leaf",paraId:12,tocIndex:9},{value:"\u5224\u65AD\u662F\u5426\u662F\u53F6\u5B50\u8282\u70B9",paraId:12,tocIndex:9},{value:"\u4F7F\u7528",paraId:12,tocIndex:9},{value:"nodeInfo.parentNodes",paraId:12,tocIndex:9},{value:"\u8BBF\u95EE\u7236\u8282\u70B9\u94FE",paraId:12,tocIndex:9},{value:"\u4F7F\u7528",paraId:12,tocIndex:9},{value:"nodeInfo.nearestNode",paraId:12,tocIndex:9},{value:"\u83B7\u53D6\u6700\u8FD1\u8282\u70B9",paraId:12,tocIndex:9},{value:"\u793A\u4F8B\uFF1A",paraId:13,tocIndex:9},{value:`// \u904D\u5386\u6240\u6709\u8282\u70B9\u5E76\u6253\u5370\u5B8C\u6574\u4FE1\u606F
completeTreeFunc(treeData, (nodeInfo) => {
  const { node, floor, leaf, parentNodes } = nodeInfo;
  console.log(\`\u5C42\u7EA7 \${floor.join('-')}: \${node.name}\`);
  console.log(\`\u53F6\u5B50\u8282\u70B9: \${leaf}\`);
  console.log(\`\u7236\u8282\u70B9\u6570\u91CF: \${parentNodes.length}\`);
});

// \u67E5\u627E\u7279\u5B9A\u8282\u70B9\u5E76\u63D0\u524D\u7EC8\u6B62
completeTreeFunc(treeData, (nodeInfo) => {
  if (nodeInfo.node.id === 'target-id') {
    console.log('\u627E\u5230\u76EE\u6807\u8282\u70B9:', nodeInfo.node.name);
    console.log('\u5C42\u7EA7\u8DEF\u5F84:', nodeInfo.floor.join('-'));
    return true; // \u63D0\u524D\u7EC8\u6B62\u904D\u5386
  }
});

// \u53EA\u5904\u7406\u53F6\u5B50\u8282\u70B9
completeTreeFunc(treeData, (nodeInfo) => {
  if (nodeInfo.leaf) {
    console.log('\u53F6\u5B50\u8282\u70B9:', nodeInfo.node.name);
  }
});
`,paraId:14,tocIndex:9},{value:"\u6839\u636E id \u67E5\u627E\u6811\u8282\u70B9\u4FE1\u606F\u3002",paraId:15,tocIndex:10},{value:`getTreeIdInfo(
  { treeData, id }: { treeData: TreeNode[]; id: string }
): NodeInfo | null
`,paraId:16,tocIndex:10},{value:"\u53C2\u6570\uFF1A",paraId:17,tocIndex:10},{value:"treeData",paraId:18,tocIndex:10},{value:" (TreeNode[]): \u6811\u5F62\u7ED3\u6784\u6570\u636E",paraId:18,tocIndex:10},{value:"id",paraId:18,tocIndex:10},{value:" (string): \u8981\u67E5\u627E\u7684\u8282\u70B9 ID",paraId:18,tocIndex:10},{value:"\u8FD4\u56DE\u503C\uFF1A",paraId:19,tocIndex:10},{value:"NodeInfo | null: \u8282\u70B9\u4FE1\u606F\u5BF9\u8C61\uFF0C\u5982\u679C\u672A\u627E\u5230\u5219\u8FD4\u56DE null",paraId:20,tocIndex:10},{value:"\u793A\u4F8B\uFF1A",paraId:21,tocIndex:10},{value:`const nodeInfo = getTreeIdInfo({ treeData, id: '1-2' });
if (nodeInfo) {
  console.log('\u8282\u70B9\u540D\u79F0:', nodeInfo.node.name);
  console.log('\u5C42\u7EA7\u8DEF\u5F84:', nodeInfo.floor.join('-'));
  console.log('\u662F\u5426\u662F\u53F6\u5B50\u8282\u70B9:', nodeInfo.leaf);
  console.log('\u7236\u8282\u70B9\u6570\u91CF:', nodeInfo.parentNodes.length);
}
`,paraId:22,tocIndex:10},{value:"\u5220\u9664\u6307\u5B9A id \u7684\u8282\u70B9\u3002",paraId:23,tocIndex:11},{value:`removeTreeNodeById(
  { treeData, id }: { treeData: TreeNode[]; id: string },
  options?: TreeOptions
): RemoveNodeResult
`,paraId:24,tocIndex:11},{value:"\u53C2\u6570\uFF1A",paraId:25,tocIndex:11},{value:"treeData",paraId:26,tocIndex:11},{value:" (TreeNode[]): \u6811\u5F62\u7ED3\u6784\u6570\u636E",paraId:26,tocIndex:11},{value:"id",paraId:26,tocIndex:11},{value:" (string): \u8981\u5220\u9664\u7684\u8282\u70B9 ID",paraId:26,tocIndex:11},{value:"options",paraId:26,tocIndex:11},{value:" (TreeOptions, \u53EF\u9009): \u914D\u7F6E\u9009\u9879\uFF0C\u652F\u6301 clone \u53C2\u6570",paraId:26,tocIndex:11},{value:"\u8FD4\u56DE\u503C\uFF1A",paraId:27,tocIndex:11},{value:`interface RemoveNodeResult {
  success: boolean; // \u662F\u5426\u6210\u529F\u5220\u9664
  info: NodeInfo | null; // \u88AB\u5220\u9664\u8282\u70B9\u7684\u4FE1\u606F
  treeData: TreeNode[]; // \u5220\u9664\u540E\u7684\u6811\u6570\u636E
  nearestNode?: TreeNode | null; // \u88AB\u5220\u9664\u8282\u70B9\u7684\u6700\u8FD1\u8282\u70B9
}
`,paraId:28,tocIndex:11},{value:"\u793A\u4F8B\uFF1A",paraId:29,tocIndex:11},{value:`const result = removeTreeNodeById({ treeData, id: '1-1' }, { clone: true });
if (result.success) {
  console.log('\u5220\u9664\u6210\u529F');
  console.log('\u88AB\u5220\u9664\u8282\u70B9\u4FE1\u606F:', result.info);
  // \u4F7F\u7528result.treeData\u66F4\u65B0\u72B6\u6001
}
`,paraId:30,tocIndex:11},{value:"\u5C06\u6307\u5B9A\u8282\u70B9\u5411\u4E0A\u63D0\u5347\u4E00\u4E2A\u5C42\u7EA7\uFF0C\u5E76\u5C06\u5176\u540E\u9762\u7684\u5144\u5F1F\u8282\u70B9\u4F5C\u4E3A\u5176\u5B50\u8282\u70B9\u3002",paraId:31,tocIndex:12},{value:`promoteTreeNodeById(
  { treeData, id }: { treeData: TreeNode[]; id: string },
  options?: TreeOptions
): PromoteNodeResult
`,paraId:32,tocIndex:12},{value:"\u53C2\u6570\uFF1A",paraId:33,tocIndex:12},{value:"treeData",paraId:34,tocIndex:12},{value:" (TreeNode[]): \u6811\u5F62\u7ED3\u6784\u6570\u636E",paraId:34,tocIndex:12},{value:"id",paraId:34,tocIndex:12},{value:" (string): \u8981\u63D0\u5347\u7684\u8282\u70B9 ID",paraId:34,tocIndex:12},{value:"options",paraId:34,tocIndex:12},{value:" (TreeOptions, \u53EF\u9009): \u914D\u7F6E\u9009\u9879\uFF0C\u652F\u6301 clone \u53C2\u6570",paraId:34,tocIndex:12},{value:"\u8FD4\u56DE\u503C\uFF1A",paraId:35,tocIndex:12},{value:`interface PromoteNodeResult {
  success: boolean; // \u662F\u5426\u6210\u529F\u63D0\u5347
  info: NodeInfo | null; // \u88AB\u63D0\u5347\u8282\u70B9\u7684\u4FE1\u606F
  treeData: TreeNode[]; // \u63D0\u5347\u540E\u7684\u6811\u6570\u636E
  message?: string; // \u64CD\u4F5C\u7ED3\u679C\u6D88\u606F
}
`,paraId:36,tocIndex:12},{value:"\u793A\u4F8B\uFF1A",paraId:37,tocIndex:12},{value:`const result = promoteTreeNodeById({ treeData, id: '1-2' }, { clone: true });
if (result.success) {
  console.log(result.message);
  console.log('\u88AB\u63D0\u5347\u8282\u70B9\u4FE1\u606F:', result.info);
  // \u4F7F\u7528result.treeData\u66F4\u65B0\u72B6\u6001
}
`,paraId:38,tocIndex:12},{value:"\u5C06\u6307\u5B9A\u8282\u70B9\u5411\u4E0B\u964D\u7EA7\u4E00\u4E2A\u5C42\u7EA7\uFF08\u6210\u4E3A\u524D\u4E00\u4E2A\u5144\u5F1F\u8282\u70B9\u7684\u5B50\u8282\u70B9\uFF09\u3002",paraId:39,tocIndex:13},{value:`demoteTreeNodeById(
  { treeData, id }: { treeData: TreeNode[]; id: string },
  options?: TreeOptions
): DemoteNodeResult
`,paraId:40,tocIndex:13},{value:"\u53C2\u6570\uFF1A",paraId:41,tocIndex:13},{value:"treeData",paraId:42,tocIndex:13},{value:" (TreeNode[]): \u6811\u5F62\u7ED3\u6784\u6570\u636E",paraId:42,tocIndex:13},{value:"id",paraId:42,tocIndex:13},{value:" (string): \u8981\u964D\u7EA7\u7684\u8282\u70B9 ID",paraId:42,tocIndex:13},{value:"options",paraId:42,tocIndex:13},{value:" (TreeOptions, \u53EF\u9009): \u914D\u7F6E\u9009\u9879\uFF0C\u652F\u6301 clone \u53C2\u6570",paraId:42,tocIndex:13},{value:"\u8FD4\u56DE\u503C\uFF1A",paraId:43,tocIndex:13},{value:`interface DemoteNodeResult {
  success: boolean; // \u662F\u5426\u6210\u529F\u964D\u7EA7
  info: NodeInfo | null; // \u88AB\u964D\u7EA7\u8282\u70B9\u7684\u4FE1\u606F
  treeData: TreeNode[]; // \u964D\u7EA7\u540E\u7684\u6811\u6570\u636E
  message?: string; // \u64CD\u4F5C\u7ED3\u679C\u6D88\u606F
}
`,paraId:44,tocIndex:13},{value:"\u793A\u4F8B\uFF1A",paraId:45,tocIndex:13},{value:`const result = demoteTreeNodeById({ treeData, id: '1-2' }, { clone: true });
if (result.success) {
  console.log(result.message);
  console.log('\u88AB\u964D\u7EA7\u8282\u70B9\u4FE1\u606F:', result.info);
  // \u4F7F\u7528result.treeData\u66F4\u65B0\u72B6\u6001
}
`,paraId:46,tocIndex:13},{value:"\u6570\u636E\u514B\u9686",paraId:47,tocIndex:14},{value:"\uFF1A\u5728\u5BF9\u6811\u6570\u636E\u8FDB\u884C\u4FEE\u6539\u64CD\u4F5C\u65F6\uFF0C\u5EFA\u8BAE\u8BBE\u7F6E ",paraId:47,tocIndex:14},{value:"clone: true",paraId:47,tocIndex:14},{value:" \u907F\u514D\u4FEE\u6539\u539F\u6570\u636E",paraId:47,tocIndex:14},{value:"\u6027\u80FD\u4F18\u5316",paraId:47,tocIndex:14},{value:"\uFF1A\u5BF9\u4E8E\u5927\u578B\u6811\u7ED3\u6784\uFF0C\u4F7F\u7528 ",paraId:47,tocIndex:14},{value:"completeTreeFunc",paraId:47,tocIndex:14},{value:" \u7684\u63D0\u524D\u7EC8\u6B62\u529F\u80FD\u53EF\u4EE5\u63D0\u9AD8\u6027\u80FD",paraId:47,tocIndex:14},{value:"\u9519\u8BEF\u5904\u7406",paraId:47,tocIndex:14},{value:"\uFF1A\u6240\u6709\u64CD\u4F5C\u51FD\u6570\u90FD\u8FD4\u56DE\u64CD\u4F5C\u7ED3\u679C\u5BF9\u8C61\uFF0C\u5305\u542B\u6210\u529F\u72B6\u6001\u548C\u8BE6\u7EC6\u4FE1\u606F",paraId:47,tocIndex:14}]}}]);
